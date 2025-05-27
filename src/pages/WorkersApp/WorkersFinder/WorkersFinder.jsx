import { useEffect, useState } from 'react';
import WorkerCard from './WorkerCard/WorkerCard';
//import OccupationFilter from './OccupationFilter';
import './workersFinder.css'
import RadioToolbar from '../../../components/RadioToolbar/RadioToolbar'

function WorkersFinder() {
  const [workers, setWorkers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState('all');

  useEffect(() => {
    const fetchCSVData = async () => {
      const sheetId = '1zeaDjkbOtWjIxLx-YxZKHA0b1mSuSZsd2mgcw5C_5Pk';
      const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;

      try {
        const response = await fetch(url);
        const csv = await response.text();
        const rows = csv
          .split('\n')
          .map(row => row.split(',').map(cell => cell.replace(/^"|"$/g, '').trim()));

        const data = [];
        const occupationSet = new Set();

        rows.forEach((row, i) => {
          if (i === 0) return; // Skip header
          const [timestamp, name, contact, village, occupation, image] = row;
          const imgSrc = `images/${name.replaceAll(' ', '-')}.jpg`;

          data.push({ name, village, occupation, contact, imgSrc });
          occupationSet.add(occupation);
        });

        setWorkers(data);
        setOccupations([...occupationSet]);
        setFiltered(data);
      } catch (err) {
        console.error('Error fetching CSV:', err);
      }
    };

    fetchCSVData();
  }, []);

  useEffect(() => {
    if (selectedOccupation === 'all') {
      setFiltered(workers);
    } else {
      setFiltered(workers.filter(w => w.occupation === selectedOccupation));
    }
  }, [selectedOccupation, workers]);
  const objectArray = ['all', ...occupations].map(item => ({ name: item, label: item }));
  
  return (
    <div className="worker-finder">
      <h3><span>Plumber || Welder || Electrician || Painter || Mason || Labor || Carpainter || Driver || Interior designer || Building contractor</span></h3>
      <div className="registration-container" >
        <div>
          <span>If you are a worker, </span>
          <span>then Register now.</span>
        </div>
        <a href="https://forms.gle/PFtPoFPWoeNKJi167" className="register-btn">Click Here</a>
      </div>
      <div id="filter-container">
        <label>🔴 Filter by Occupation:</label>
      <RadioToolbar
        className="occupation-filter"
        name="occupations"
        options={['all', ...occupations].map(item => ({ value: item, label: item }))}
        selectedValue={selectedOccupation}
        onChange={setSelectedOccupation}
      />
      </div>

      <div className="card-container">
        {filtered.map((worker, i) => (
          <WorkerCard key={i} {...worker} />
        ))}
      </div>
    </div>
  );
}

export default WorkersFinder;