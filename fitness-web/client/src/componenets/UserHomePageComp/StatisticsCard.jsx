/**
 * this component is a card that shows the statistics of the user
 */
import React from "react";
import { MDBCardText, MDBCard, MDBCol,MDBCardImage, MDBCardBody,MDBCardTitle } from "mdb-react-ui-kit";

export default function StatisticsCard(props) {
  const { img_src , title, text, } = props;
  
  return (
    <>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src= {img_src}
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
                {text}
            </MDBCardText>
          </MDBCardBody>
    
        </MDBCard>
      </MDBCol>
    </>
  );
}
