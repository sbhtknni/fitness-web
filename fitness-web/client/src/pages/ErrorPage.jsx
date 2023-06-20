import React, { useEffect } from "react";
import Spinner from "../componenets/General/Spinner";
import MainLayout from "../layout/MainLayout.jsx";

export function ErrorPage(props) {
  const { toRemove } = props;
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
          }}>
          <h1>Page Not Found</h1>

          <p>Sorry, but the page you were trying to view does not exist.</p>
          <div style={{ lexDirection: "row" }}>
            <Spinner />
          </div>
          <p>You have to log in first</p>
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
          }}>
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
