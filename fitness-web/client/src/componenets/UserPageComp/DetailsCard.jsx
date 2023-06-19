import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCol,
} from "mdb-react-ui-kit";
import RowOfDetails from "./RowOfDetails";

export default function DetailsCard(props) {
  const { user } = props;
  return (
    <MDBCard className= " mb-3 d-flex align-items-startmb-6">
      <MDBCardBody>
        <RowOfDetails
          type="Full Name"
          value={user.firstName + " " + user.lastName}></RowOfDetails>
        <RowOfDetails type=" Email " value={user.email}></RowOfDetails>
        <RowOfDetails type=" Height " value={user.height}></RowOfDetails>
        <RowOfDetails type=" Weight " value={user.weight}></RowOfDetails>
        <RowOfDetails type=" Weight " value={user.weight}></RowOfDetails>
        <RowOfDetails type=" Weight " value={user.weight}></RowOfDetails>
        <RowOfDetails type=" Weight " value={user.weight}></RowOfDetails>
        <RowOfDetails type=" Weight " value={user.weight}></RowOfDetails>
      </MDBCardBody>
    </MDBCard>
  );
}
