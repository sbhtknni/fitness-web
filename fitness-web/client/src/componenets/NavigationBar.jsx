import React from 'react';
import { Link } from 'react-router-dom';


export function NavigationBar(props) {
      const { logged_in } = props;
    return (
      <nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg navbar sticky-top">
    <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
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
//   <a class="navbar-brand" href="#">
//     <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""></img>
//     Bootstrap
//   </a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/login">login</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown link
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>

//   </div>
// </nav>
        //  <div className="navigation-bar">
        //    <div className='navigation-bar-logo'>MyLogo</div>
        //       <ul className='navigation-bar-menu'>
        //        <Link className='navigation-bar-link' to='/'>Home</Link>
        //        <Link className='navigation-bar-link' to='/training'>Training Programas</Link>
        //        {logged_in && <Link className='navigation-bar-link' to='/blog'>Blog</Link>}
        // {logged_in
        //   ? <Link className='navigation-bar-link' to='/'>Logout</Link>
        //   : <Link className='navigation-bar-link' id='login' to='/login'>Login</Link>
        // }              
        //      </ul>
        //   </div>
          )
}
export default NavigationBar;
