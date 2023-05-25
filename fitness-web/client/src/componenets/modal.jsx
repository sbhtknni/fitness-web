
import React from 'react';

export function Modal( props) {
    const {title, information, onOptionChange ,Isleftbutoon,leftbutton,rightbutton,afterClick} = props;


  return (
    <>

{/* <!-- Button trigger modal --> */}

        {/* // <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
         */}
        {/* // <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> {title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                {information}
              </div>
              <div class="modal-footer">
  {Isleftbutoon === "true" ? (
    <div>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">
      {leftbutton}
      </button>
      <button type="button" class="btn btn-primary" onClick={afterClick}>
        {rightbutton}
      </button>
    </div>
  ) : (
    <div>
      <button type="button" class="btn btn-primary">
      {rightbutton}
      </button>
    </div>
  )}
</div>

            </div>
          </div>
        </div>
        </>
  );
}

export default Modal;