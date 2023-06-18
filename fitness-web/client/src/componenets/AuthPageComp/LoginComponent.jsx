import React, { useState } from "react";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";
import MainLayout from '../../layout/MainLayout';

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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalOption, setModalOption] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        // Show modal based on login result
        setShowModal(true);
        setModalOption('success'); // or 'error'
        setModalMessage('Invalid credentials'); // Set the appropriate message
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <MainLayout>
            <MDBContainer fluid onSubmit={handleSubmit}>
                <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-dark text-white mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px', marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }} >
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
            </MDBContainer>
        </MainLayout>
    );
}

export default LoginComponent;