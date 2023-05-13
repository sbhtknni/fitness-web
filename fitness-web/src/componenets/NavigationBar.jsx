import React from 'react';
import { Link } from 'react-router-dom';


export function NavigationBar(props) {
      const { logged_in } = props;
    return (
      
         <div className="navigation-bar">
           <div className='navigation-bar-logo'>MyLogo</div>
              <ul className='navigation-bar-menu'>
               <Link className='navigation-bar-link' to='/'>Home</Link>
               <Link className='navigation-bar-link' to='/training'>Training Programas</Link>
               {logged_in && <Link className='navigation-bar-link' to='/blog'>Blog</Link>}
        {logged_in
          ? <Link className='navigation-bar-link' to='/'>Logout</Link>
          : <Link className='navigation-bar-link' id='login' to='/login'>Login</Link>
        }              
             </ul>
          </div>
          )
}
export default NavigationBar;
