import React, { useState } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import { register } from "../../controller/requests";

function RegistrationForm({ handleRegistration }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await register(
        email,
        password,
        firstName,
        lastName,
        height,
        weight
      );
      if (response === false) {
        handleRegistration("error");
      } else {
        handleRegistration("success");
      }
    } catch (err) {
      handleRegistration("error");
      console.error(err);
    }
  };

  return (

      <MDBContainer onSubmit={handleSubmit}>
        <MDBRow className="g-0 align-items-center">
          <MDBCol md='6'>
            <MDBCard
              className="bg-dark text-white my-5 cascading-right">
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5 text-uppercase">Sign up now</h2>
                <MDBValidation className="row g-3 align-items-center">
                  <MDBRow >
                    <MDBCol >
                      <MDBValidationItem
                        feedback="Please choose First name."
                        invalid>
                        <MDBInput
                          value={firstName}
                          name="FirstName"
                          onChange={(event) => setfirstName(event.target.value)}
                          id="FirstName"
                          required
                          label="First Name"
                          type="text"
                          size="lg"
                          wrapperClass="mb-4"
                          labelClass="text-white"
                          style={{ color: "white" }}
                        />
                      </MDBValidationItem>
                    </MDBCol>
                    <MDBCol >
                      <MDBValidationItem
                        feedback="Please choose a Last name."
                        invalid>
                        <MDBInput
                          value={lastName}
                          name="LastName"
                          onChange={(event) => setLastName(event.target.value)}
                          id="LastName"
                          required
                          label="Last Name"
                          type="text"
                          size="lg"
                          wrapperClass="mb-4"
                          labelClass="text-white"
                          style={{ color: "white" }}
                        />
                      </MDBValidationItem>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow >
                    <MDBValidationItem feedback="Please choose a Email." invalid>
                      <MDBInput
                        value={email}
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        id="email"
                        required
                        label="Email"
                        type="email"
                        size="lg"
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        style={{ color: "white" }}
                      />
                    </MDBValidationItem>
                  </MDBRow>
                  <MDBRow >
                    <MDBValidationItem
                      feedback="Please choose a Password."
                      invalid>
                      <MDBInput
                        value={password}
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                        id="password"
                        required
                        label="Password"
                        type="password"
                        size="lg"
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        style={{ color: "white" }}
                      />
                    </MDBValidationItem>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol col="5">
                      <MDBValidationItem
                        feedback="Choose height between 0-210"
                        invalid>
                        <MDBInput
                          value={height}
                          name="Height"
                          onChange={(event) => setHeight(event.target.value)}
                          id="Height"
                          required
                          label="Height"
                          type="number"
                          min={0}
                          max={210}
                          size="lg"
                          wrapperClass="mb-4"
                          labelClass="text-white"
                          style={{ color: "white" }}
                        />
                      </MDBValidationItem>
                    </MDBCol>
                    <MDBCol >
                      <MDBValidationItem
                        feedback="Choose Weight between 0-250"
                        invalid>
                        <MDBInput
                          value={weight}
                          name="Weight"
                          onChange={(event) => setWeight(event.target.value)}
                          id="Weight"
                          required
                          min={0}
                          max={250}
                          label="Weight"
                          type="number"
                          size="lg"
                          wrapperClass="mb-4"
                          labelClass="text-white"
                          style={{ color: "white" }}
                        />
                      </MDBValidationItem>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <div style={{ marginBottom: "20px" }}>
                      <MDBBtn
                        outline
                        className="mx-2 px-5"
                        color="white"
                        size="lg"
                        type="submit"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal">
                        Register
                      </MDBBtn>
                    </div>
                  </MDBRow>
                </MDBValidation>
                <div>
                  <p className="mb-0">
                    Have an account?{" "}
                    <a href="login" className="text-white-50 fw-bold">
                      Log in
                    </a>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6'>

              <img
                src="https://nowosci.beactivetv.pl/wp-content/themes/beactive/img/fitlovers/fitlovers-photo.png"
                
                alt=""
                fluid

              />

          </MDBCol>
        </MDBRow>
      </MDBContainer>


  );
}

export default RegistrationForm;
