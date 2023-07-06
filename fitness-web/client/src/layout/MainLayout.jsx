import React from "react";
import NavigationBar from "../componenets/GeneralComp/NavigationBar.jsx";
//This component is used to create a layout for the main pages of the website
//Used in every page except for the login and register pages and the home page 
//Children is the page that is being loaded in the layout 
function MainLayout(props) {
  const { children } = props;
  return (
      <><NavigationBar> </NavigationBar>
      <div className="pageLoadAnimation">
        <div>{children}</div>
    </div></>

      );
}
export default MainLayout;
