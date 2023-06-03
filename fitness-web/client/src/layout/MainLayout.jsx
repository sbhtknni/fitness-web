import React from "react";
import NavigationBar from "..//componenets/NavigationBar.jsx";
function MainLayout(props) {
  const { children } = props;
  return (
    <div>
      <NavigationBar > </NavigationBar>
      <div className="App">
        <header className="App-header">
          <div>{children}</div>
        </header>
      </div>
    </div>
      );
}
export default MainLayout;
