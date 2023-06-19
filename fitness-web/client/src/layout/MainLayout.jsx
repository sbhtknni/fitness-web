import React from "react";
import NavigationBar from "..//componenets/NavigationBar.jsx";
function MainLayout(props) {
  const { children } = props;
  return (

      <><NavigationBar> </NavigationBar><div className="container">
      <header className="App-header">
        <div>{children}</div>
      </header>
    </div></>

      );
}
export default MainLayout;
