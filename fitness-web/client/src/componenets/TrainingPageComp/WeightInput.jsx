import { React, useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBBtnGroup,
  MDBContainer,
} from "mdb-react-ui-kit";

//This component is used to create a form with a button that submits it and a headline and body that are passed as props
//Used in the TrainingPageComp.jsx , it contains a validation item that checks if the input is a number between 40 and 250 
//to prevent the user from entering an invalid weight , uses MDBvalidationItem and MDBvalidation from mdbreactui kit
export default function WeightInput(props) {
  const [newWeight, setNewWeight] = useState();
  const { addTrainingProgram } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("---",newWeight);
    addTrainingProgram(newWeight);
  };

  return (
    <MDBContainer onSubmit={handleSubmit}>
      <MDBValidation className="row g-3">
        <MDBValidationItem
          feedback="Enter Weight (Min 40 kg Max 250 kg )"
          invalid
          className="col-md-4"
        >
          <MDBInput
            label="Enter new weight"
            type="number"
            name="weight"
            step={0.01}
            required
            id="newWeight"
            min={40}
            max={250}
            value={newWeight}
            onChange={(event) => setNewWeight(event.target.value)}
    
          />
        </MDBValidationItem>
        <div className="d-flex mt-3">
          <MDBBtnGroup aria-label="Basic example">
            <MDBBtn type="submit" color="success">
              Submit
            </MDBBtn>
          </MDBBtnGroup>
        </div>
      </MDBValidation>
    </MDBContainer>
  );
}
