import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Modal(props) {
  const { title, information, closeModal, leftButton, rightButton, afterClick, buttonProps } = props;

  const handleConfirmClick = () => {
    closeModal(); // Close the modal before navigating
    afterClick(); // Perform the action after clicking the confirm button
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        {buttonProps}
      </button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{information}</div>
            <div className="modal-footer">
              {leftButton && (
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  {leftButton}
                </button>
              )}
              <button type="button" className="btn btn-primary" onClick={handleConfirmClick}>
                {rightButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Modal;
