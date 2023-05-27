import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export function NavigationBar(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  const Logout = () => {
    removeCookie("access_token");
    window.localStorage.removeItem("userId");
    
  }
  
    return (
      <nav className="navbar navbar-dark bg-dark navbar navbar-expand-lg navbar sticky-top">
 <a className="navbar-brand" href="/">
    <img src="https://gymgearmentors.com/wp-content/uploads/2022/08/cropped-Orange-Black-White-Minimalist-Fitness-Gym-Logo-3-1.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
    Fitness
  </a>      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
        
          {!cookies.access_token ? ( <li className="nav-item">
            <a className="nav-link" href="/auth">Login</a>
          </li>) : (<li className="nav-item">
            <a className="nav-link" href="/auth"     onClick={Logout} >Logout</a>
           
          </li>)}

         

          <li className="nav-item">
            <a className="nav-link" href="/training">Trainings</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/2">Action</a>
              <a className="dropdown-item" href="/2">Another action</a>
              <a className="dropdown-item" href="/2">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

          )
}
export default NavigationBar;
