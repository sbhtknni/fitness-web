import React from 'react';
import {

    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
  } from 'mdb-react-ui-kit';



export default function ProfilePicture(props) {
    const {user} = props;
  return (
    <MDBCard className="mb-4">
    <MDBCardBody className="text-center">
      <MDBCardImage
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
        alt="avatar"
        className="rounded-circle"
        style={{ width: '200px' }}
        fluid />
        
      <p className="text-muted mb-1">{}</p>
      <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
      <div className="d-flex justify-content-center mb-2">
        <MDBBtn>Follow</MDBBtn>
        <MDBBtn outline className="ms-1">Message</MDBBtn>
      </div>
    </MDBCardBody>
  </MDBCard>


  );
}
