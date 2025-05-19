import {useState} from 'react';
import RadioToolbar from '../RadioToolbar/RadioToolbar'; 
import './VehicleFilter.css';

import AutoIcon from './assets/auto-rickshaw.svg?react';
import BoleroIcon from './assets/bolero.svg?react';
import CarIcon from './assets/car.svg?react';
import TravellerIcon from './assets/traveller.svg?react';
import { FaShuttleVan, FaBus, FaTractor, FaTruckPickup, FaTruck } from "react-icons/fa";

const VehicleFilter = ({selectedVehicle, setSelectedVehicle}) => {
  const [selectedCategory, setSelectedCategory] = useState("passenger");
 // const [selectedPassengerVehicle, setSelectedPassengerVehicle] = useState("passenger");
  
  
  const vehicleCategories = [
    { value: 'passenger', label: 'Passenger' },
    { value: 'commercial', label: 'Commercial' },
  ];

  const passengerVehicles = [
    { value: 'car', label: 'Car', Icon: CarIcon },
    { value: 'bolero', label: 'Bolero', Icon: BoleroIcon },
    { value: 'auto', label: 'Auto', Icon: AutoIcon },
    { value: 'van', label: 'Van', Icon: FaShuttleVan },
    { value: 'bus', label: 'Bus', Icon: FaBus },
    { value: 'traveller', label: 'Traveller', Icon: TravellerIcon },
  ];

  const commercialVehicles = [
    { value: 'pickup', label: 'Pick Up', Icon: FaTruckPickup },
    { value: 'tractor', label: 'Tractor', Icon: FaTractor },
    { value: 'minitruck', label: 'Mini Truck', Icon: FaTruck },
  ];

  const currentOptions = selectedCategory === 'passenger' ? passengerVehicles : commercialVehicles;

  return (
    <div id="filter-container">    
      <label>Select Vehicle Type:</label>
      <RadioToolbar
        className="vehicle-category"
        name="vehicle-type"
        options={vehicleCategories}
        selectedValue={selectedCategory}
        onChange={setSelectedCategory}
      />
    <p>selected Category: {selectedCategory}</p>


      <label>Filter:</label>
      <RadioToolbar
        name="vehicle-filter"
        options={currentOptions}
        selectedValue={selectedVehicle}
        onChange={setSelectedVehicle}
        
      />
    <p>selected Vehicle: {selectedVehicle}</p>
      
    </div>
  );
};

export default VehicleFilter;