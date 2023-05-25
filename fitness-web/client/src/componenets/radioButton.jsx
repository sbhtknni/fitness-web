import React from 'react';

function RadioButton(props) {
  const { options, selectedOption, onOptionChange } = props;

  const handleOptionChange = (option) => {
    if (option !== selectedOption) {
      onOptionChange(option);
    }
  };

  return (
    <div className="btn-group btn-group-toggle bg-dark" data-toggle="buttons">
      {options.map((option) => (
        <label
          key={option}
          className={`btn btn-secondary ${option === selectedOption ? 'active' : ''}`}
          onClick={() => handleOptionChange(option)}
        >
          <input
            type="radio"
            name="options"
            autoComplete="off"
            checked={option === selectedOption}
            onChange={() => {}}
          />{' '}
          {option}
        </label>
      ))}
    </div>
  );
}

export default RadioButton;