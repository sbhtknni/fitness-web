import { React, useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import InformativeModal from "../InformativeModal";

export default function WeightInput(props) {
  const [newWeight, setNewWeight] = useState();
  const { addTrainingProgram } = props;
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleShow = () => setOptSmModal(!optSmModal);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newWeight > 0 && newWeight < 250) {
      addTrainingProgram(newWeight);
    }
  };

  return (
    <>
      <div>
        <MDBValidation className="row g-3" isValidated>
          <MDBValidationItem
            feedback="Enter Weight to Choose Training   ( Max 250 kg )"
            invalid
            className="col-md-4"
            >       
            <MDBInput
              type="number"
              className="form-control input-primary"
              required
              id="newWeight"
              min="0"
              max="250"
              value={newWeight}
              onChange={(event) => setNewWeight(event.target.value)}
              
            />
          </MDBValidationItem>

          <div className="d-flex mt-3">
            <MDBBtnGroup aria-label="Basic example">
              <MDBBtn type="submit" color="success" onClick={handleSubmit}>
                Submit
              </MDBBtn>

              <InformativeModal
                button_name="How to use?"
                headline="Add New Training Form "
                body="Please make sure you choose the training program that is right for you,
                 Then make sure you enter a weight within a normal range
                Click Submit"></InformativeModal>
            </MDBBtnGroup>
          </div>
        </MDBValidation>
      </div>
    </>
  );
}
