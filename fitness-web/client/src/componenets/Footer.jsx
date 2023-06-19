import React from "react";
import {

  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
    return (
      <footer className="container">
            <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='https://api.whatsapp.com/send?phone=972547575612'>
        <MDBIcon fab icon='whatsapp' />
      </MDBBtn>
      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='https://github.com/sbhtknni/fitness-web'>
        <MDBIcon fab icon='github' />
      </MDBBtn>
        <p>© RD company since 2023</p>
      </footer>
    );
}
  export default Footer;