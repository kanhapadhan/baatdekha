import './radioToolbar.module.css'

function OccupationFilter({ occupations, selected, onChange }) {
  return (
    <div id="occupation-filter" className="radio-toolbar">
      {['all', ...occupations].map((occupation) => (
        <label key={occupation}>
          <input
            type="radio"
            name="occupation"
            value={occupation}
            checked={selected === occupation}
            onChange={() => onChange(occupation)}
          />
          <span>{occupation}</span>
        </label>
      ))}
    </div>
  );
}

export default OccupationFilter;