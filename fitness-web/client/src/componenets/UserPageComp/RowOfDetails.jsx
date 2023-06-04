import React from "react";
import { MDBCardText, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function RowOfDetails(props) {
  const { type, value } = props;
  return (
    <>
      <MDBRow>
        <MDBCol sm="3">
          <MDBCardText>{type}</MDBCardText>
        </MDBCol>
        <MDBCol sm="9">
          <MDBCardText className="text-muted">{value}</MDBCardText>
        </MDBCol>
        <hr />
      </MDBRow>
    </>
  );
}
