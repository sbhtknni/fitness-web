import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import getURL from "../../assets/assetsUrls";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { logout_db } from "../../controller/requests";
//Navigation bar for the website with the links to the different pages , the links are different if the user is logged in or not
//The navigation bar is a component that is used in all the pages of the website
//MainLayout.jsx is the main layout of the website and it contains the navigation bar
export function NavigationBar(props) {
  const [showBasic, setShowBasic] = useState(false);
  const [access_token] = useState(window.localStorage.getItem("access_token"));

  const navigate = useNavigate();
  //Logout function that removes the user id and the access token from the local storage and navigates to the login page
  const Logout = () => {
    logout_db(window.localStorage.getItem("userId"));
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("selectedTrainingInfo");
    navigate("/auth/login");
  };
  return (

    <MDBNavbar dark expand="lg" bgColor="dark">
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

        {/* if the user is not logged in*/}
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            {!access_token ? (
              <>
              <MDBNavbarItem>
                  <MDBNavbarLink href="/">Home Page</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/auth/login">Login</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink href="/auth/register">Sign Up</MDBNavbarLink>
                </MDBNavbarItem>
              </>
            ) : (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/userpage">User</MDBNavbarLink>
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink onClick={Logout}>Log Out</MDBNavbarLink>
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
              </>
            )}
            <MDBNavbarItem className="">
              <MDBNavbarLink href="/aboutus">About Us</MDBNavbarLink>
            </MDBNavbarItem> 
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
export default NavigationBar;
