import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout.jsx';
import { useNavigate } from 'react-router-dom';
import RadioButton from '../componenets/radioButton.jsx';
import { checkUserExists, addUser } from '../services/usersDB';
import NavigationBar from '../componenets/NavigationBar.jsx';




export function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    

    navigate('/blog',{state : {email:email , password:password}} );

  };


  return (
    <>
    <NavigationBar></NavigationBar>
    <form onSubmit={handleSubmit}>
      <section class="vh-500 gradient-custom">
  <div class="container py-4 h-100">
    <div class="row d-flex justify-content-center align-items-center h-400">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" >
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>
              {/*EMAIL */}
              <div class="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="email"
                          class="form-control form-control-lg"
                          onChange={(event) => setEmail(event.target.value)} />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="password" class="form-control form-control-lg" onChange={(event)=>setPassword(event.target.value)} />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>

       

            </div>

            <div>
              <p class="mb-0">Don't have an account?  <br></br><a href="/register" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <RadioButton></RadioButton>
</section>
</form>
    </>
  );
}

export function Register() {
    const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling form submission goes here
  };

  return (
  // <!-- Section: Design Block -->
<section class="text-center text-lg-start  vh-500 gradient-custom">
  <style>
  {/* .cascading-right {
      margin-right: -50px;
    }

    @media (max-width: 991.98px) {
      .cascading-right {
        margin-right: 0;
      }
    } */}
  </style>

  {/* <!-- Jumbotron --> */}
  <NavigationBar></NavigationBar>
  
  <div class="container py-4 h-100">
    <div class="row d-flex justify-content-center align-items-center h-400">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" >
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form>
              {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control" />
                    <label class="form-label" for="form3Example1">First name</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control" />
                    <label class="form-label" for="form3Example2">Last name</label>
                  </div>
                </div>
              </div>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3" class="form-control" />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" />
                <label class="form-label" for="form3Example4">Password</label>
              </div>
              
        

              {/* <!-- Submit button --> */}
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              {/* <!-- Register buttons --> */}
              <div class="text-center">
                <p>or sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
</section>
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Logic for handling form submission goes here
  // };

  // return (
  //   <div>
  //     <h2>Register</h2>
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="username">Username</label>
  //         <input
  //           type="text"
  //           id="username"
  //           name="username"
  //           value={username}
  //           onChange={(event) => setUsername(event.target.value)}
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="email">Email</label>
  //         <input
  //           type="email"
  //           id="email"
  //           name="email"
  //           value={email}
  //           onChange={(event) => setEmail(event.target.value)}
  //           required
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="password">Password</label>
  //         <input
  //           type="password"
  //           id="password"
  //           name="password"
  //           value={password}
  //           onChange={(event) => setPassword(event.target.value)}
  //           required
  //         />
  //       </div>
  //       <button type="submit">Register</button>
  //     </form>
  //   </div>
  );
}

