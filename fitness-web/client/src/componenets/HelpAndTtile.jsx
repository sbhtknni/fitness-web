import React, { useState } from "react";
import { MDBContainer, MDBRow,MDBCol } from "mdb-react-ui-kit";


import InstructionsFormatter from "./TrainingPageComp/InstructionsFormatter";
import InformativeModal from "./InformativeModal";

export default function HelpAndTitle(props) {
    const { button_name, headline, body,title } = props;

  return (
    <>
          
          <MDBContainer>
            <MDBRow>
              <MDBCol className="col-md-10">
              <h3 className="fw-bolder  mt-4">{title}</h3>

              </MDBCol>
              <MDBCol>
                <InformativeModal   
                button_name={button_name}
                headline={headline}
                body={body}></InformativeModal>
                
            
              </MDBCol>
            </MDBRow>
            <div className="d-flex justify-content-xl-evenly">
            </div>
          </MDBContainer>
    </>
  );
}
