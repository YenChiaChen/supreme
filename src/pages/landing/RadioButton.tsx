import React from 'react';
import './style.css'
interface RadioOption {
  id: string;
  label: string;
}

interface RadioButtonGroupProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ name, options, selectedValue, onChange }) => {
  return (
    <div className="radio-button-container">
      {options.map(option => (
        <div className="radio-button" key={option.id}>
          <input
            type="radio"
            className="radio-button__input"
            id={option.id}
            name={name}
            value={option.label}
            checked={selectedValue === option.label}
            onChange={() => onChange(option.label)}
          />
          <label className="radio-button__label" htmlFor={option.id}>
            <span className="radio-button__custom"></span>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
