import React from "react";
import { MDBRadio } from "mdb-react-ui-kit";
//Radio button component
//Used in the paged of the training and muscle pages
//The component gets an array of options and a selected option and a function to handle the change
function RadioButton(props) {
  const { options, selectedOption, onOptionChange } = props;

  //This function is called when the user changes the selected option and calls the onOptionChange function
  const handleOptionChange = (option) => {
    if (option !== selectedOption) {
      onOptionChange(option);
    }
  };

  return (
    <>
      {options.map((option) => (
        <MDBRadio
          key={option}
          btn
          btnColor="dark"
          id={`btn-radio${option}`}
          name="options"
          label={option}
          checked={option === selectedOption}
          wrapperTag="span"
          onChange={() => handleOptionChange(option)}
          
        />
      ))}
    </>
  );
}

export default RadioButton;
