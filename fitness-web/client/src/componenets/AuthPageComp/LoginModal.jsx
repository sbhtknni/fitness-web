import React from "react";
import { Modal, Button } from "react-bootstrap";



function LoginModal({ showModal, modalOption, modalMessage, handleModalClose, setShowModal }) {
    return (
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton={modalOption === "error"}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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