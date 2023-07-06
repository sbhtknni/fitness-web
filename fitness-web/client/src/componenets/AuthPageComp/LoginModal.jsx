/**
 * LoginModal.jsx is a modal component that is used to display the login status
 * of the user. It is used in LoginComponent.jsx
 */
import React from "react";
import { Modal, Button } from "react-bootstrap";


// Show the modal based on the login result
function LoginModal({ showModal, modalOption, modalMessage, handleModalClose, setShowModal }) {
    return (
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton={modalOption === "error"}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            modalOption === "logged in" && (
              <p>
                You are already logged in, please log out first.
                Automatic log out to the last logged in user happens after 20 miniutes.
              </p>
            )
          }
          {modalOption === "error" && (
            <p>
              Error occurred while trying to login, User Name or Password Incorrect {modalMessage}.
            </p>
          )}
          {modalOption === "success" && <p>Logged In Successfully</p>}
        </Modal.Body>
        <Modal.Footer>
          {modalOption === "success" && (
            <Button variant="primary" onClick={handleModalClose}>
              OK
            </Button>
          )}
          {modalOption !== "success" && (
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
  export default LoginModal;