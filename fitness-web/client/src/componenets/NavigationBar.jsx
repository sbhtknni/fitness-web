import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
export function NavigationBar(props) {
  const [showBasic, setShowBasic] = useState(false);
  const [access_token,setAccessToken] = useState(    window.localStorage.getItem("access_token") );


  const navigate = useNavigate();
  const Logout = () => {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("selectedTrainingInfo");
    navigate("/auth/login");
  };

  const handleLinkClick = (muscle) => {
    navigate("/TrainingProgramas");
    window.localStorage.setItem("selectedTrainingInfo", muscle);
    
    setTimeout(() => {
      window.location.reload(); // refresh page
    }, 100);
  };

  return (
    <MDBNavbar dark  expand="lg" light bgColor="dark">
      <MDBContainer fluid>
      <MDBNavbarBrand href="/">
          
          <img width="30" height="30" src="https://queenstreetmedical.co.nz/wp-content/uploads/2023/02/qstfsvglogo.png" alt="Logo" />
          Fitness
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}>
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            {!access_token ? (
              
                <MDBNavbarItem>
                  <MDBNavbarLink href="/auth/login">Login</MDBNavbarLink>
                </MDBNavbarItem>
                
            ) : (
              <>
           
                <MDBNavbarItem>
                  <MDBNavbarLink href="/userpage">User</MDBNavbarLink>
                </MDBNavbarItem>
                {/* <LinkNav navigate_to="/auth/login" navigate_name="Logout" onClick={()=> Logout}  /> */}
                
                <MDBNavbarItem>
                  <MDBNavbarLink href="/auth/login" onClick={Logout} >Log Out</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/training">Choose Training</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={() => handleLinkClick("Back")} >Back</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => handleLinkClick("Chest")}>Chest</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => handleLinkClick("Legs")}>Legs</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => handleLinkClick("Hands")}>Hands</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => handleLinkClick("Shoulders")}>Shoulders</MDBDropdownItem>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
              </>
            )}
   
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default NavigationBar;
