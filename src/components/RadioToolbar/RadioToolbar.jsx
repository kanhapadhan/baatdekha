import React from 'react';
import './RadioToolbar.css'

const RadioToolbar = ({
  options = [],
  selectedValue,
  onChange,
  name,
  className,
}) => {
  return (
    <div className={`radio-toolbar ${className}`}>
      {options.map(({ value, label, Icon }) => (
        <label key={value}>
          <input
            type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={() => onChange(value)}
          />
          <span className="icon">
            {Icon && <Icon size={40} height={40} />}
            {label && <span>{label}</span>}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioToolbar;

