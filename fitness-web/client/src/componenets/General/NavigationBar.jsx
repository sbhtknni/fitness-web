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
import getURL from "../../assets/assetsUrls";
export function NavigationBar(props) {
  const [showBasic, setShowBasic] = useState(false);
  const [access_token, setAccessToken] = useState(
    window.localStorage.getItem("access_token")
  );

  const navigate = useNavigate();
  const Logout = () => {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("selectedTrainingInfo");
    navigate("/auth/login");
  };
  return (
    <MDBNavbar sticky fixed dark expand="lg" bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand href={!access_token ? "/" : "/userpage"}>
          <img width="30" height="30" src={getURL("logo")} alt="Logo" />
          Fitness
        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
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
                  <MDBNavbarLink href="/auth/login" onClick={Logout}>
                    Log Out
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/training">
                    Choose Training
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/muscleInformation">
                    Muscle Information
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBDropdown></MDBDropdown>
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
