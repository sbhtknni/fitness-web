/**
 * ProfilePicture.jsx is a card component that displays the user's profile picture, name, and a button to change the training program.
 * The card is used in the UserHomePageComp component
 * The card uses the ProfilePicture component
 */
import React from 'react';
import {

  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';



export default function ProfilePicture(props) {
  const { user } = props;
  return (

    <MDBCol md='3'>
      <MDBCard className='h-100'>
        <MDBCardBody className="text-center">
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle"
            style={{ width: '200px' }}
            fluid />

          <p className="fw-bolder " >{user.firstName + "  " + user.lastName}</p>
          <br />
          <p className="text-muted ">Click To Change Training Program</p>
          <MDBIcon fas icon="caret-down" />
          <br />
          <div className="d-flex justify-content-center ">
            <MDBBtn color='dark' href='/training'>Change Now  </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

  );
}