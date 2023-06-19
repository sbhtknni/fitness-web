import React from "react";
import { MDBCardText, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function RowOfDetails(props) {
  const { type, value } = props;
  return (
    <>
        <div style={{height: 59}}>

      <MDBRow>

        <MDBCol sm="3" className="">
          <MDBCardText className="fw-bolder">{type}</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted text-center fst-italic">{value}</MDBCardText>
        </MDBCol>
      </MDBRow>
      <hr className="w-40 " />

      </div>
    </>
  );
}
