import React from "react";
import MainLayout from '../layout/MainLayout.jsx';
import  {useLocation} from 'react-router-dom';

function BlogPage(props){
    const location = useLocation();
    const { email, password } = location.state;
    return( 
        <MainLayout logged_in = {true}>
            <div>{email}</div>
            <div>{password}</div>
            <div>Blog</div>
        </MainLayout>
 
    ) 
    
}
export default BlogPage;