import React from "react";
import Spinner from "../componenets/GeneralComp/Spinner";
import MainLayout from "../layout/MainLayout.jsx";



//Error page component that is used to display a loading screen or an error message
//Erase the local storage from the user if the toRemove prop is true
//Has two options: toRemove = true or false
//When to Remove is true the local storage is erased
//When toRemove is false the loading screen is displayed
export function ErrorPage(props) {
  const { toRemove } = props;

  //toRemove is a prop that is passed to the component
  if (toRemove) {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("selectedTrainingInfo");
    window.localStorage.removeItem("selectedTrainingName");
  }
  if (toRemove === true) {
    return (
      <MainLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <h1>Page Not Found</h1>

          <p>Sorry, but the page you were trying to view does not exist.</p>
          <div style={{ lexDirection: "row" }}>
            <Spinner />
          </div>
          <p>You have to log in first</p>
          <div>
          <button
              type="button"
              class="btn btn-outline-danger"
              data-mdb-ripple-color="dark"
              onClick={() => {
                window.location.href = "auth/login";
              }} >LogIn again </button>           
          </div>
        </div>
      </MainLayout>
    );
  } else {
    return (
      <MainLayout>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <div style={{ lexDirection: "row" }}>
            <Spinner />
          </div>
          <h1 style={{ color: "blue" }}>Loading...</h1>
        </div>
      </MainLayout>
    );
  }
}
export default ErrorPage;
