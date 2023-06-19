import React from 'react';
import { MDBBtnGroup, MDBRadio } from 'mdb-react-ui-kit';
function RadioButton(props) {
  const { options, selectedOption, onOptionChange } = props;

  const handleOptionChange = (option) => {
    if (option !== selectedOption) {
      onOptionChange(option);
       

    }
  };

  return (

    <MDBBtnGroup shadow='5'  >
        {options.map((option) => (
          <MDBRadio
            className='mx-1'
            key={option}
            btn
            btnColor='dark'
            id={`btn-radio${option}`}
            name='options'
            wrapperClass='mx-1'
            label={option}
            checked={option === selectedOption}
            onChange={() => handleOptionChange(option) }
          />
        ))}
      </MDBBtnGroup>
  
  );
}

export default RadioButton;