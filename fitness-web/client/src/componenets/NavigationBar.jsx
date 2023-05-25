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
      <nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg navbar sticky-top">
 <a class="navbar-brand" href="/">
    <img src="https://gymgearmentors.com/wp-content/uploads/2022/08/cropped-Orange-Black-White-Minimalist-Fitness-Gym-Logo-3-1.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
    Fitness
  </a>      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
        
          {!cookies.access_token ? ( <li class="nav-item">
            <a class="nav-link" href="/auth">Login</a>
          </li>) : (<li class="nav-item">
            <a class="nav-link" href="/auth"     onClick={Logout} >Logout</a>
           
          </li>)}

         

          <li class="nav-item">
            <a class="nav-link" href="/training">Trainings</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/2">Action</a>
              <a class="dropdown-item" href="/2">Another action</a>
              <a class="dropdown-item" href="/2">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

          )
}
export default NavigationBar;
