import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import InformativeModal from "./InformativeModal";
//This component is used to create a title with a button that opens a modal with instructions
//Used inn many components and pages
export default function HelpAndTitle(props) {
  const { button_name, headline, body, title } = props;

  return (
    <>
      <br />
      <MDBRow className="mb-3">
        <MDBCol className="col-md-10">
          <h1 className="display-5 fw-bolder mt-5">{title}</h1>
        </MDBCol>
        <MDBCol>
          <InformativeModal
            button_name={button_name}
            headline={headline}
            body={body}
          ></InformativeModal>
        </MDBCol>
      </MDBRow>
    </>
  );
}
