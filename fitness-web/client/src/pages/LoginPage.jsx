import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RadioButton from '../componenets/radioButton.jsx';
import NavigationBar from '../componenets/NavigationBar.jsx';
//For fetching api
import axios from 'axios';
import { useCookies } from "react-cookie"


export function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setCookies] = useCookies(["access_token"])
  const handleSubmit = async (event) => {
    event.preventDefault();
    //Send Post Request to the api
    try {
      //1:10:11
      const response = await axios.post("http://localhost:3002/auth/login", { email: email, password: password })
      // alert("Login Successfully!")
      const message = response.data.message;

      setCookies("access_token", response.data.token);
      alert(message)
      alert("---")
      alert(response.data.token)
      window.localStorage.setItem("userId", response.data.userID);
      // navigate('/blog',{state : {email:email , password:password}} );
      navigate('/blog');

      // alert(response.status.);
      console.log(response.status)
    }
    catch (err) {

      alert(err.response.data.message)
      console.error(err);
    }
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
                      {/* Email */}
                      <div class="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="email"
                          class="form-control form-control-lg"
                          onChange={(event) => setEmail(event.target.value)} />
                        <label class="form-label" for="typeEmailX">Email</label>
                      </div>
                      {/* Password */}

                      <div class="form-outline form-white mb-4">
                        <input type="password"
                          id="password"
                          class="form-control form-control-lg"
                          onChange={(event) => setPassword(event.target.value)} />
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

// Register function logic

export function Register() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  // Logic for handling form submission goes here

  const [, setCookies] = useCookies(["access_token"])
  const handleSubmit = async (event) => {
    event.preventDefault();
    //Send Post Request to the api
    try {
      //1:10:11
      const response = await axios.post("http://localhost:3002/auth/register", { email: email, password: password, firstName: firstName, lastName: lastName, height: height, weight: weight })
      alert("Register Successfully!")
      const message = response.data.message;

      setCookies("access_token", response.data.token);
      alert(message)
      alert("---")
      alert(response.data.token)
      window.localStorage.setItem("userId", response.data.userID);
      // navigate('/blog',{state : {email:email , password:password}} );
      navigate('/blog');

      // alert(response.status.);
      console.log(response.status)
    }
    catch (err) {

      alert(err.response.data.message)
      console.error(err);
    }

  };

  return (
    // <!-- Section: Design Block -->
    <>
      <NavigationBar></NavigationBar>
      <form onSubmit={handleSubmit}>
        <section class="text-center text-lg-start  vh-500 gradient-custom">
          <div class="container py-4 h-100">
            <div class="row d-flex justify-content-center align-items-center h-400">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white">
                  <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-5">Sign up now</h2>
                      <form>
                        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              {/* <!-- FirstName input --> */}
                              <input
                                type="FirstName"
                                id="FirstName"
                                class="form-control"
                                onChange={(event) => setfirstName(event.target.value)} />
                              <label class="form-label" for="typeFirstNameX">First Name</label>
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              {/* <!-- LastName input --> */}
                              <input type="LastName"
                                id="LastName"
                                class="form-control"
                                onChange={(event) => setLastName(event.target.value)} />
                              <label class="form-label" for="typeLastNameX">Last Name</label>
                            </div>
                          </div>
                        </div>

                        {/* <!-- Email input --> */}
                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            class="form-control"
                            onChange={(event) => setEmail(event.target.value)} />
                          <label class="form-label" for="typeEmailX">Email address</label>
                        </div>

                        {/* <!-- Password input --> */}
                        <div class="form-outline mb-4">
                          <input type="password" id="password" class="form-control"
                            onChange={(event) => setPassword(event.target.value)} />
                          <label class="form-label" for="typePasswordX">Password</label>
                        </div>

                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              {/* <!-- Height input --> */}
                              <input
                                type="Height"
                                id="Height"
                                class="form-control"
                                onChange={(event) => setHeight(event.target.value)} />
                              <label class="form-label" for="typeHeightX">Height</label>
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              {/* <!-- Weight input --> */}
                              <input type="Weight"
                                id="Weight"
                                class="form-control"
                                onChange={(event) => setWeight(event.target.value)} />
                              <label class="form-label" for="typeWeightX">Weight</label>
                            </div>
                          </div>
                        </div>

                        {/* <!-- Submit button --> */}
                        <button type="submit" class="btn btn-primary btn-block mb-4">
                          Sign up
                        </button>
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
          <RadioButton></RadioButton>
        </section>
      </form></>

  );
}
