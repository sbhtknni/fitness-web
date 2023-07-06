import React, { useState } from "react";
import { updateHeight } from "../../controller/requests";
import {
  MDBBtn,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import Modal from "react-bootstrap/Modal";

//This component is used to create a modal with a button that opens it and a headline and body that are passed as props
// Used in the UserPage.jsx , it is used to edit the height of the user
export default function HeightModal({ setHeight, fetchUser}) {
  const [showModal, setShowModal] = useState(false);
  const [editHeight, setEditHeight] = useState("");

  //Change height function is used to update the height in the database
  const changeHeight = async () => {
    if (editHeight >= 50 && editHeight <= 210) {
      const response = updateHeight(editHeight);
      console.log("updateeeee");
      if (response === false) {
      } else {
        await fetchUser();
        setHeight(editHeight);
        setShowModal(false);
        
      }
    }
  };
  //This function is used to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MDBBtn color="danger" onClick={toggleModal}>
        Edit Height
      </MDBBtn>

      <Modal show={showModal} tabIndex="-1">

        <MDBModalHeader className="bg-dark text-white">
          <MDBModalTitle>Set Height</MDBModalTitle>
          <MDBBtn
            color="none"
            className="btn-close btn-close-white"
            onClick={toggleModal}
          ></MDBBtn>
        </MDBModalHeader>

        <MDBModalBody
          className="d-flex justify-content-center"
          onSubmit={changeHeight}
        >

          <MDBValidation className="row g-3">

            <MDBRow className="d-flex justify-content-center g-2 py-2 fw-bold">
              Insert your new height
            </MDBRow>

            <MDBValidationItem feedback="Min 50 cm Max 250 cm " invalid>
              <MDBRow className="justify-content-center g-2 py-2">
                <MDBCol md="5">
                  <MDBInput
                    value={editHeight}
                    name="Height"
                    onChange={(event) => setEditHeight(event.target.value)}
                    id="Height"
                    required
                    step={0.01}
                    label="Height"
                    type="number"
                    min={50}
                    max={210}
                    size="lg"
                    labelClass="text-black"
                    style={{ color: "black" }}
                  />
                </MDBCol>
              </MDBRow>
            </MDBValidationItem>

            <hr />
            <MDBRow className="justify-content-center ">
              <MDBCol md="4">
                <MDBBtn color="success" type="submit">
                  Change Height
                </MDBBtn>
              </MDBCol>
            </MDBRow>
            
          </MDBValidation>

        </MDBModalBody>

      </Modal>
    </>
  );
}
