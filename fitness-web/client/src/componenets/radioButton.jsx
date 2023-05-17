import React from 'react';

function RadioButton() {
  return (
    <div className="btn-group btn-group-toggle  bg-dark " data-toggle="buttons">
      <label className="btn btn-secondary active">
        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Active
      </label>
      <label className="btn btn-secondary">
        <input type="radio" name="options" id="option2" autoComplete="off" /> Radio
      </label>
      <label className="btn btn-secondary">
        <input type="radio" name="options" id="option3" autoComplete="off" /> Radio
      </label>
    </div>
  );
}

export default RadioButton;