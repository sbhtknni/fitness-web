import React from 'react';
import {

    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBCol,
  } from 'mdb-react-ui-kit';



export default function ProfilePicture(props) {
    const {user} = props;
  return (
    <MDBCol lg="4">
    <MDBCard className="mb-4">
    <MDBCardBody className="text-center">
      <MDBCardImage
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
        alt="avatar"
        className="rounded-circle"
        style={{ width: '200px' }}
        fluid />
        
      <p className=" mb-4 fw-bolder " >{user.firstName + "  "+user.lastName}</p>
      <p className="text-muted mb-4">Current Training Program : {user.firstName+ "   "+user.lastName}</p>
      <div className="d-flex justify-content-center mb-2">
        <MDBBtn>Follow</MDBBtn>
        <MDBBtn outline className="ms-1">Message</MDBBtn>
      </div>
    </MDBCardBody>
  </MDBCard>
</MDBCol>

  );
}
