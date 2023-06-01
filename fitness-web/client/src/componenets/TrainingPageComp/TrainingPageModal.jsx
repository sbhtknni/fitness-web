import React from 'react';


export default function TrainingPageModal(props) {
    const {src} = props;

  return (
    // Fade in down animation

    <Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Add Training Program</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Three Options to SHow */}
      {modalOption === "emptyInput" && (
        <p>Please enter a weight value.</p>
      )}
      {modalOption === "error" && (
        <p>Error occurred while adding the training program.</p>
      )}
      {modalOption === "success" && (
        <p>Training program added successfully.</p>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShowModal(false)}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

  );
}
