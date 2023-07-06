import React from "react";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
//Footer component that is used in many pages and components includes links to whatsapp and github and our company name
function Footer() {
  return (
    <footer className="container">
     
      <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: "#333333" }}
        href="https://github.com/RomRL/FitnessWeb"
      >
        <MDBIcon fab icon="github" />
      </MDBBtn>
      <p>© RD company since 2020</p>
    </footer>
  );
}
export default Footer;
