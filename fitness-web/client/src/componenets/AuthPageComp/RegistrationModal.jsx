
/**
 * RegistrationModal.jsx is a modal component that is used to display the registration status
 * of the user. It is used in RegisterComponent.jsx
 * 
 */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function RegistrationModal({ showModal, modalOption, handleModalClose }) {
  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalOption === 'success' ? 'Registration Successful' : 'Registration Failed'}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegistrationModal;