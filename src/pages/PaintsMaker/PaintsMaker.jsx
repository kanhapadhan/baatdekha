import './styles/style.css';
import banner from './asianpaint.png';
import SearchBar from './components/SearchBar';
import HueSlider from './components/HueSlider';
import ColorBox from './components/ColorBox';
import { useEffect, useState, useRef } from 'react';
import { hexToHsl } from './utils/colorConverter';

function PaintsMaker() {
  const [shades, setShades] = useState([]);
  const [filteredShades, setFilteredShades] = useState([]);
  
  const [hue, setHue] = useState(300);
  const [activeColorId, setActiveColorId] = useState(null);
  const boxContainerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxContainerRef.current && !boxContainerRef.current.contains(e.target)) {
        setActiveColorId(null);
      }
    };
  
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  
  useEffect(() => {
  fetch('/shadelisting.shade.json')
    .then(res => res.json())
    .then(data => {
      setShades(data.shade);
      const initial = data.shade.filter(obj => obj.pageNumber === '15');
      setFilteredShades(initial);
    });
  }, []);

  

  const handleSearch = (query) => {
    const result = shades.filter(obj =>
      obj.entityName.toLowerCase().includes(query.toLowerCase()) ||
      obj.entityCode.toLowerCase().includes(query)
    );
    setFilteredShades(result.length ? result : []);
  };

  const handleHueChange = (value) => {
    setHue(value);
    setActiveColorId(null)
    const threshold = 10;
    const minHue = value - threshold;
    const maxHue = value + threshold;

    const filtered = shades.filter(obj => {
      const [h] = hexToHsl(obj.shadeHexCode);
      return h >= minHue && h <= maxHue;
    });

    filtered.sort((a, b) => hexToHsl(b.shadeHexCode)[2] - hexToHsl(a.shadeHexCode)[2]);
    setFilteredShades(filtered);
  };

  return (
    <div className="paints-maker">
      <div className="banner-container">
        <img src={banner} alt="Banner" />
      </div>
      <div className="paints-maker-content">
        <div className="inputArea">
          <SearchBar onSearch={handleSearch} suggestions={shades.map(s => s.entityName)} />
          <HueSlider value={hue} onChange={handleHueChange} />
        </div>
        <div className="results" ref={boxContainerRef}>
            {filteredShades.map((shade, index) => (
              <ColorBox
                key={index}
                colorObj={shade}
                isActive={activeColorId === index}
                onActivate={() => setActiveColorId(prev => (prev === index ? null : index))}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default PaintsMaker;
