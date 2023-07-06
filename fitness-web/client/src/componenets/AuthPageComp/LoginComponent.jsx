/**
 * Login Component
 * This component is used to login to the app
 * this component is the main component that handles the login process
 * it uses LoginForm.jsx and LoginModal.jsx
 */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";
import MainLayout from "../../layout/MainLayout";
import Footer from "..//GeneralComp/Footer.jsx";
import "..//..//assets/App.css";
import { login } from "../../controller/requests";


// Login Function  login to the app
function LoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  // Handle the login process
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      if (response==="Incorrect Password") {
        setModalOption("error");
        setShowModal(true);
        setModalMessage("Incorrect Username or Password");
        return;
      }
      if (response==="User already logged in") {
        setModalOption("logged in");
        setShowModal(true);
        setModalMessage("User already logged in");
        return;
      }
      // if (response=="User Not Found") {
      // Show modal based on login result
      setShowModal(true);
      setModalOption("success"); // or 'error'
      setModalMessage("Invalid credentials"); // Set the appropriate message
      window.localStorage.setItem("access_token", response.data.token); // Save the token in local storage
      window.localStorage.setItem("userId", response.data.userID); // Save the user id in local storage
    } catch (err) {
      setModalOption("error");
      setShowModal(true);
      console.error(err);
    }
  };

  // Handle the email change
  const handleEmailChange = async (e) => {
    setEmail(e.target.value);
  };
  // Handle the password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // Close the modal and navigate to user page if login is successful
  const handleModalClose = () => {
    setShowModal(false);
    if (modalOption === "success") {
      navigate("/userpage");
    }
  };

  return (
    <MainLayout >

      <LoginForm
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
      />

      <LoginModal
        showModal={showModal}
        modalOption={modalOption}
        modalMessage={modalMessage}
        handleModalClose={handleModalClose}
        setShowModal={setShowModal}
      />
      <hr />
      <Footer />

    </MainLayout>

  );
}

export default LoginComponent;
