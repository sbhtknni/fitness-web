import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

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
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const [showBasic, setShowBasic] = useState(false);

  const navigate = useNavigate();
  const Logout = () => {
    removeCookie("access_token");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("selectedTrainingInfo");
    navigate("/auth/login");
  };

  const handleLinkClick = (muscle) => {
    window.localStorage.setItem("selectedTrainingInfo", muscle);
    setTimeout(() => {
      // Code to refresh the page or trigger navigation after 1 second
      // Replace with your specific logic here
      window.location.reload(); // Example: Refresh the page after 1 second
    }, 20);
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
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}>
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            {!cookies.access_token ? (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/auth/login">Login</MDBNavbarLink>
                </MDBNavbarItem>
                
            ) : (
              <>
           
                <MDBNavbarItem>
                  <MDBNavbarLink href="/userpage">User</MDBNavbarLink>
                </MDBNavbarItem>{" "}
                {/* <LinkNav navigate_to="/auth/login" navigate_name="Logout" onClick={()=> Logout}  /> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/auth/login" onClick={Logout}>
                    Logout
                  </Link>
                </li>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/training">Choose Training</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
              </>
            )}
   
              {/* <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick("Back")}>
                Back
              </Link>
              <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick("Chest")}>
                Chest
              </Link>
              <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick("Legs")}>
                Legs
              </Link>
              <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick("Hands")}>
                Hands
              </Link>
              <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick("Shoulders")}>
                Shoulders
              </Link> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default NavigationBar;
