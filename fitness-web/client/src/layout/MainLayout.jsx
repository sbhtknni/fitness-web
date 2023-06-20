import React from "react";
import NavigationBar from "../componenets/General/NavigationBar.jsx";
function MainLayout(props) {
  const { children } = props;
  return (

      <><NavigationBar> </NavigationBar>
      <div className="container">
        <div>{children}</div>
    </div></>

      );
}
export default MainLayout;
