/**
* this component is a card that is used in the user home page to display the user's details.
* the component is used in UserHomePageForm.jsx.
* the component uses the following components:
* - InstructionsFormatter.jsx
*/
import React from "react";
import { MDBCard, MDBCol, MDBCardImage, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";
import InstructionsFormatter from "../TrainingPageComp/InstructionsFormatter";

export default function BigCard(props) {
  const { img_src, title, text, picture, fillPicture } = props;

  return (
    <>
      <MDBCol md='4'>
        <MDBCard className="h-100 ">
          <MDBCardImage style={{ height: "200px", width: "100%" }}
            src={img_src}
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <InstructionsFormatter text={text} />

            {fillPicture && (
              <img
                src={picture}
                alt="BMI Chart"
              />
            )}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}
