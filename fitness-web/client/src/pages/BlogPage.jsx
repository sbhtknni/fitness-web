import React from "react";
import MainLayout from '../layout/MainLayout.jsx';
import  {useLocation} from 'react-router-dom';
import Chart from 'chart.js/auto'


function BlogPage(props){
    // const location = useLocation();
    // const { email, password } = location.state;
    // const {userId} =window.localStorage.getItem("userId")
    return( 

        <html lang="en">
          <head>
            <title>Chart.js example</title>
          </head>
          <body>
             <div><canvas id="dimensions"></canvas></div><br/>
            <div><canvas id="acquisitions"></canvas></div>
        
            <script type="module" src="dimensions.js"></script> 
            <script type="module" src="acquisitions.js"></script>
          </body>
        </html>
         
    ) 
    
}
export default BlogPage;