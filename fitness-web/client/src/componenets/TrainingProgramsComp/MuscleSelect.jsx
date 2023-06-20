import React from 'react';
import RadioButton from '../General/RadioButton';

// MuscleSelect Component
function MuscleSelect({ musclesNames, muscle, handleMuscleChange }) {
  return (
    <div className="col-lg-1 col-centered">
      <RadioButton
        style={{ marginBottom: "30px" }}
        options={musclesNames}
        selectedOption={muscle ? muscle.name : ""}
        onOptionChange={handleMuscleChange}
      />
    </div>
  );
}
export default MuscleSelect;