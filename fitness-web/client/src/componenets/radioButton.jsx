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
    // <><div className="btn-group btn-group-toggle" data-toggle="buttons">
    //   {options.map((option) => (
    //     <label
    //       key={option}
    //       className={`btn btn-secondary ${option === selectedOption ? 'active' : ''}`}
    //       onClick={() => handleOptionChange(option)}
    //     >
    //       <input
    //         type="radio"
    //         name="options"
    //         autoComplete="off"
    //         checked={option === selectedOption}
    //         onChange={() => { } } />{' '}
    //       {option}
    //     </label>
    //   ))}
      
    // </div>
    <MDBBtnGroup>
        {options.map((option) => (
          <MDBRadio
            key={option}
            btn
            btnColor='dark'
            id={`btn-radio${option}`}
            name='options'
            wrapperClass='mx-2'
            wrapperTag='span'
            label={option}
            checked={option === selectedOption}
            onChange={() => handleOptionChange(option)}
          />
        ))}
      </MDBBtnGroup>

  );
}

export default RadioButton;