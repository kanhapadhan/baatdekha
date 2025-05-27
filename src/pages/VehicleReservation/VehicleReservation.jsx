// VehicleReservation.jsx 
import React, { useEffect, useState } from 'react'; 
import VehicleFilter from './VehicleFilter/VehicleFilter'; 
import VehicleCard from './VehicleCard/VehicleCard';
import './VehicleReservation.css'
import Spinner from './Spinner/Spinner'

import AutoIcon from './assets/auto-rickshaw.svg?react';
import BoleroIcon from './assets/bolero.svg?react';
import CarIcon from './assets/car.svg?react';
import TravellerIcon from './assets/traveller.svg?react';
import { FaShuttleVan, FaBus, FaTractor, FaTruckPickup, FaTruck } from "react-icons/fa";

const vehicleTypeIcons = {
  auto: AutoIcon,
  bolero: BoleroIcon,
  car: CarIcon,
  traveller: TravellerIcon,
  van: FaShuttleVan,
  bus: FaBus,
  pickup: FaTruckPickup,
  tractor: FaTractor,
  minitruck: FaTruck
};

const SHEET_ID = '1JYY3WnpZdJHI4Q17Hq0RDiuQGtwZkjZSkm-n7hOOqGc';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;
  
  const VehicleReservation = () => {
    const [vehiclesData, setVehiclesData] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState('auto');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const fetchCSVData = async () => {
        try {
          const response = await fetch(CSV_URL);
          const csv = await response.text();
          const rows = csv.split('\n').map(row => row.split(',').map(cell => cell.replace(/^"|"$/g, '').trim()));
          const data = rows.slice(1).map(([slNo, name, village, vehicleType, contact]) => ({ name, village, vehicleType, contact }));
          setVehiclesData(data);
        } catch (error) {
          console.error('Error fetching CSV:', error);
        } finally {
          setLoading(false); // Always runs after try/catch
        }
      };
      fetchCSVData();
    }, []);
    
    const filteredVehicles = vehiclesData.filter(v => v.vehicleType.toLowerCase() === selectedVehicle);
    
    return (
      <div className="vehicle-reservation">
        <header>
          <h2>Vehicle Reservation</h2>
          <VehicleFilter selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />
        </header>
    
        {loading ? (
          <Spinner/>
        ) : (
          <main className="cards-wrapper">
            {filteredVehicles.length === 0 ? (
              <div className="no-data">No data available for this vehicle type.</div>
            ) : (
              filteredVehicles.map((vehicle, i) => {
                const iconData = vehicleTypeIcons[vehicle.vehicleType.toLowerCase()] || {};
                return (
                  <VehicleCard
                    key={i}
                    name={vehicle.name}
                    village={vehicle.village}
                    contact={vehicle.contact}
                    Icon={iconData}
                  />
                );
              })
            )}
          </main>
        )}
      </div>
    );
  };

export default VehicleReservation;
