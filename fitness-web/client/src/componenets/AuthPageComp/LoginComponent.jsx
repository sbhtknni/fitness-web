import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";
import MainLayout from '../../layout/MainLayout';
import axios from "axios"; 
import Footer from '..//Footer.jsx';
import '..//..//assets/App.css';
import background from "..//..//assets/loginBG.png";


// bootstrap imports
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
} from "mdb-react-ui-kit";

// Login Function  login to the app
function LoginComponent() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalOption, setModalOption] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://fitness-api-43yp.onrender.com/auth/login", {
                email: email,
                password: password,
            });
            // Show modal based on login result
            setShowModal(true);
            setModalOption('success'); // or 'error'
            setModalMessage('Invalid credentials'); // Set the appropriate message
            window.localStorage.setItem("access_token", response.data.token);
            window.localStorage.setItem("userId", response.data.userID);

        } catch (err) {
            setModalOption("error");
            setShowModal(true);
            console.error(err);
        }
    };

    const handleEmailChange = async (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleModalClose = () => {
        setShowModal(false);
        if (modalOption === "success") {
            navigate("/userpage");
        }
    };

    return (
        <MainLayout>
            <MDBContainer fluid onSubmit={handleSubmit}>
                <div style={{  backgroundImage: `url(${background})`, borderRadius: '10px' }} >
            <br />
            <br />
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-dark text-white mx-auto' style={{ borderRadius: '1rem' ,maxWidth: '400px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }} >
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">Please enter your login and password!</p>
                                <LoginForm email={email} password={password} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleSubmit={handleSubmit} />
                                <div>
                                    <p className="mb-0">Don't have an account? <a href="register" className="text-white-50 fw-bold">Sign Up</a></p>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <LoginModal showModal={showModal} modalOption={modalOption} modalMessage={modalMessage} handleModalClose={handleModalClose} setShowModal={setShowModal} />
        
                </div>
                    <hr />
                    <Footer />
                    
            </MDBContainer>
        </MainLayout>
    );
}

export default LoginComponent;