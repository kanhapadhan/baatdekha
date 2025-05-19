import React from 'react';
import './RadioToolbar.css'

const RadioToolbar = ({
  options = [],
  selectedValue,
  onChange,
  name,
  className,
  renderLabel, // Optional custom label renderer
}) => {
  return (
    <div className={`radio-toolbar ${className}`}>
      {options.map(({ value, label, Icon, iconSrc }) => (
        <label key={value}>
          <input
            type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={() => onChange(value)}
          />
          {renderLabel ? (
            renderLabel({ Icon, iconSrc, label })
          ) : (
            <span className="icon">
              {Icon ? <Icon size={40} height={40} /> : iconSrc ? <img src={iconSrc} alt={label} height="40" /> : null}
              <span>{label}</span>
            </span>
          )}
        </label>
      ))}
    </div>
  );
};

export default RadioToolbar;