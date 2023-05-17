import React from "react";
import NavigationBar from '..//componenets/NavigationBar.jsx';
function MainLayout(props){
    const {children} = props;
    const {logged_in} = props;
    console.log(props);
    return( 
     <div>
        <NavigationBar logged_in={logged_in} > </NavigationBar>
        <div className="App">
         <header className="App-header">
         <div>{children}</div>
            </header>
    </div>
     </div>   
 
    ) 
    
}
export default MainLayout;