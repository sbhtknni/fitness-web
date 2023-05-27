import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../componenets/NavigationBar.jsx';
import Modal from '../componenets/modal';


//For fetching api
import axios from 'axios';
import { useCookies } from "react-cookie"


export function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setCookies] = useCookies(['access_token']);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [submittedPassword, setSubmittedPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      setSubmittedEmail(true);
      setSubmittedPassword(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3002/auth/login', {
        email: email,
        password: password,
      });

      const message = response.data.message;

      setCookies('access_token', response.data.token);
      <Modal></Modal>

      alert(message);
      alert('---');
      alert(response.data.token);
      window.localStorage.setItem('userId', response.data.userID);
      navigate('/');

      console.log(response.status);
    } catch (err) {
      alert(err.response.data.message);
      console.error(err);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailValid(event.target.checkValidity());
    setSubmittedEmail(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordValid(event.target.checkValidity());
    setSubmittedPassword(false);
  };

  return (
    <>
      <NavigationBar />
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <section className="vh-500 gradient-custom">
          <div className="container py-4 h-100">
            <div className="row d-flex justify-content-center align-items-center h-400">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

                      <div className="form-outline form-white mb-6">
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`form-control form-control-lg ${submittedEmail && !emailValid ? 'is-invalid' : ''}`}
                          required
                          value={email}
                          onChange={handleEmailChange}
                        />
                        {submittedEmail && !emailValid && <div className="invalid-feedback">Please enter a valid email address.</div>}
                        {emailValid && <div className="valid-feedback">Looks good!</div>}
                      </div>

                      <div className="form-outline form-white mb-6">
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          className={`form-control form-control-lg ${submittedPassword && !passwordValid ? 'is-invalid' : ''}`}
                          required
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        {submittedPassword && !passwordValid && <div className="invalid-feedback">Please enter a password.</div>}
                        {passwordValid && <div className="valid-feedback">Looks good!</div>}
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>
                        <Modal className="btn btn-outline-light btn-lg px-5"  type="submit"   button_props = " Login"/>

                      <button className="btn btn-outline-light btn-lg px-5" type="submit" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                        Login

                      </button>

                    </div>

                    <div>
                      <p className="mb-0">
                        Don't have an account? <br />
                        <a href="/register" className="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

  const forms = document.querySelectorAll('.needs-validation');

  (() => {
    'use strict';
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();

  // Logic for handling form submission goes here

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Send Post Request to the api
    try {
      const response = await axios.post("http://localhost:3002/auth/register", { email: email, password: password, firstName: firstName, lastName: lastName, height: height, weight: weight })
      window.localStorage.setItem("userId", response.data.userID);
      navigate('/auth');

      // alert(response.status.);
      console.log(response.status)
    }
    catch (err) {
      //TODO: enter model for error
      alert("not registered")
      alert(err.response.data.message)
      console.error(err);
    }

  };


  return (
    <>
      <NavigationBar></NavigationBar>
      <form onSubmit={handleSubmit} class="row g-3 needs-validation" noValidate>
        <section class="text-center text-lg-start  vh-500 gradient-custom">
          <div class="container py-4 h-100">
            <div class="row d-flex justify-content-center align-items-center h-400">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white">
                  <div class="card-body p-5 text-center">
                    <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-5">Sign up now</h2>

                      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            {/* <!-- FirstName input --> */}
                            <input
                              type="text"
                              id="FirstName"
                              class="form-control"
                              required
                              onChange={(event) => setfirstName(event.target.value)} />
                            <label class="form-label" for="typeFirstNameX">First Name</label>
                            <div class="invalid-feedback">Please enter First Name</div>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            {/* <!-- LastName input --> */}
                            <input type="text"
                              id="LastName"
                              class="form-control"
                              required
                              onChange={(event) => setLastName(event.target.value)} />
                            <label class="form-label" for="typeLastNameX">Last Name</label>
                            <div class="invalid-feedback">Please enter Last Name</div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Email input --> */}
                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          class="form-control"
                          required
                          onChange={(event) => setEmail(event.target.value)} />
                        <label class="form-label" for="typeEmailX">Email address</label>
                        <div class="invalid-feedback">Please enter a valid email address</div>
                      </div>

                      {/* <!-- Password input --> */}

                      <div class="form-outline mb-4">
                        <input type="password" class="form-control" id="validationCustom01" required
                          onChange={(event) => setPassword(event.target.value)} />
                        <label for="validationCustom01" class="form-label">Password</label>
                        <div class="invalid-feedback">Please enter Password</div>
                      </div>

                      {/* <!-- Height input --> */}
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="number"
                              id="Height"
                              class="form-control"
                              required
                              min={0}
                              onChange={(event) => setHeight(event.target.value)} />
                            <label class="form-label" for="typeHeightX">Height</label>
                            <div class="invalid-feedback">Please enter Height</div>
                          </div>
                        </div>

                        {/* <!-- Weight input --> */}
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input type="number"
                              id="Weight"
                              class="form-control"
                              required
                              min={0}
                              onChange={(event) => setWeight(event.target.value)} />
                            <label class="form-label" for="typeWeightX">Weight</label>
                            <div class="invalid-feedback">Please enter Weight</div>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Submit button --> */}
                      <button class="btn btn-primary btn-block mb-4" type="submit"> Sign up </button>
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
      </form>
    </>

  );
}
