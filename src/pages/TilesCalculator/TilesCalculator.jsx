import React, { useState } from 'react';
import './tilesCalculator.css'; // Move your CSS into this file
import tilesCalculatorBanner from './tiles.jpg'

export default function TilesCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [tileSize, setTileSize] = useState('12x8,12');
  const [results, setResults] = useState(null);

  const calculateTiles = () => {
    const len = parseFloat(length);
    const wid = parseFloat(width);

    if (isNaN(len) || isNaN(wid) || len <= 0 || wid <= 0) {
      alert('Please enter valid length and width values.');
      return;
    }

    const [size, perBox] = tileSize.split(',');
    const [tileW, tileH] = size.split('x').map(val => parseFloat(val) / 12);
    const tileArea = tileW * tileH;
    const area = len * wid;
    const neededTiles = Math.ceil(area / tileArea);
    const neededBoxes = Math.ceil(neededTiles / parseInt(perBox));

    setResults({
      area: area.toFixed(2),
      tiles: neededTiles,
      boxes: neededBoxes
    });
  };

  return (
    <div className="tilesCalculator">
      <div className="image-cover">
        <img src={tilesCalculatorBanner} alt="Tiles Calculator banner" />
      </div>
      <div className="container">
        <h1>Tiles Estimator</h1>

        <label>Wall/Floor Length (ft):</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Enter length in feet"
          required
        />

        <label>Wall/Floor Width (ft):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          placeholder="Enter width in feet"
          required
        />

        <label>Select Tile Size:</label>
        <select value={tileSize} onChange={(e) => setTileSize(e.target.value)}>
          <option value="12x8,12">12" x 8"</option>
          <option value="10x15,8">10" x 15"</option>
          <option value="12x12,10">12" x 12"</option>
          <option value="12x18,6">12" x 18"</option>
          <option value="18x24,5">18" x 24"</option>
          <option value="24x24,4">24" x 24"</option>
          <option value="24x48,2">24" x 48"</option>
        </select>

        <button onClick={calculateTiles}>Calculate</button>
        <hr />

        <div className="result">
          {results ? `Results` : 'Results'}
        </div>

        <table>
          <tbody>
            <tr>
              <th>Total Area</th>
              <td>{results ? `${results.area} sq ft` : '-'}</td>
            </tr>
            <tr>
              <th>Tiles Needed</th>
              <td>{results ? `${results.tiles} Tiles` : '-'}</td>
            </tr>
            <tr>
              <th>Boxes Needed</th>
              <td>{results ? `${results.boxes} Boxes` : '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
