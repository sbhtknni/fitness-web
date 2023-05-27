import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export function NavigationBar(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  const Logout = () => {
    removeCookie("access_token");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("selectedTrainingInfo");

  }
  
  const handleLinkClick = (muscle) => {
    window.localStorage.setItem('selectedTrainingInfo', muscle);
    window.location.reload();
  };

    return (
<nav className="navbar navbar-dark bg-dark navbar navbar-expand-lg navbar sticky-top">
   
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        {/* <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li> */}
          {!cookies.access_token ? 
          (
            <>
               <Link className="navbar-brand" to="/">
        <img src="https://queenstreetmedical.co.nz/wp-content/uploads/2023/02/qstfsvglogo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
        Fitness
      </Link>
      
            <li className="nav-item">
              <Link className="nav-link" to="/auth/login">Login</Link>
            </li>
            </>
          ) 
          
          :
          
          (
            <>
                      <Link className="navbar-brand" to="/userpage">
        <img src="https://queenstreetmedical.co.nz/wp-content/uploads/2023/02/qstfsvglogo.png" width="30" height="30" className="d-inline-block align-top" alt="" />
        Fitness
      </Link>
           <li className="nav-item active">
            <Link className="nav-link" to="/userpage">User Page <span className="sr-only">(current)</span></Link>
          </li>
            <li className="nav-item">
              <Link className="nav-link" to="/auth/login" onClick={Logout}>Logout</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/training">Trainings</Link>
            </li>
            </>

          )}
        
      
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Training information
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick('Back')}
              >
                Back
              </Link>
              <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick('Chest')}
              >
                Chest
              </Link>
              <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick('Legs')}
              >
                Legs
              </Link>
              <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick('Hands')}
              >
                Hands
              </Link>
              <Link
                className="dropdown-item"
                to="/TrainingProgramas"
                onClick={() => handleLinkClick('Shoulders')}
              >
                Shoulders
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>

  )
}
export default NavigationBar;
