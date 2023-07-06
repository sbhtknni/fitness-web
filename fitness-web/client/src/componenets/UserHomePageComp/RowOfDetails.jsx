/**
 * this component is a row of details in the user home page in statistics section
 */
import React from "react";
import { MDBCardText, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function RowOfDetails(props) {
  const { type, value , color } = props;
  return (
    <>
        
      <MDBRow>
        <MDBCol >
          <MDBCardText  className="fw-bolder" >{type}</MDBCardText>
        </MDBCol>
        <MDBCol >
          <MDBCardText className=" text-center fst-italic" style={{ color }}>{value}</MDBCardText>
        </MDBCol>
      </MDBRow>
     <hr className="w-40 " />
    </>
  );
}
