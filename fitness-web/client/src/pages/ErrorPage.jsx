import React from "react";
import Spinner from "../componenets/Spinner";
import MainLayout from "../layout/MainLayout.jsx";
import { useCookies } from "react-cookie";

export function ErrorPage() {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
    removeCookie("access_token");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("selectedTrainingInfo");
    window.localStorage.removeItem("selectedTrainingName");

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
        <p>Yu have to log in first</p>
       
      </div>
    </MainLayout>
  );
}
export default ErrorPage;
