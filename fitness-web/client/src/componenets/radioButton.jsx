import React from 'react';

function RadioButton({ options, selectedOption, onOptionChange }) {
  return (
    <div className="btn-group btn-group-toggle bg-dark" data-toggle="buttons">
      {options.map((option) => (
        <label
          key={option}
          className={`btn btn-secondary ${option === selectedOption ? 'active' : ''}`}
        >
          <input
            type="radio"
            name="options"
            autoComplete="off"
            checked={option === selectedOption}
            onChange={() => onOptionChange(option)}
          />{' '}
          {option}
        </label>
      ))}
    </div>
  );
}

export default RadioButton;
