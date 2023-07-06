/**
 * MuscleSelect.jsx is a component for selecting a muscle from a list of muscles.
 *  It is used in MuscleInformationComp.jsx
 * It shows the list of muscles and handles the selection of a muscle
 *  It uses RadioButton.jsx component for showing the list of muscles
 */
import React from 'react';
import RadioButton from '../GeneralComp/RadioButton';

// MuscleSelect Component
function MuscleSelect({ musclesNames, muscle, handleMuscleChange }) {
  return (
      <RadioButton
        options={musclesNames}
        selectedOption={muscle ? muscle.name : ""}
        onOptionChange={handleMuscleChange}
      />
  );
}
export default MuscleSelect;