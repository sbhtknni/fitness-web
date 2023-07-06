/**
 * RegisterComponent.jsx is the register page for the application
 * It is used in App.js
 * It shows the registration form and handles the registration process.
 * It uses RegistrationForm.jsx and RegistrationModal.jsx
 * The main component that handle the registration process 
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationModal from "./RegistrationModal";
import RegistrationForm from "./RegistrationForm";
import MainLayout from '../../layout/MainLayout';
import Footer from '..//GeneralComp/Footer.jsx';

function RegisterComponent() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalOption, setModalOption] = useState('');

    // Show the modal based on the registration result
    const handleRegistration = (option) => {
        setModalOption(option);
        setShowModal(true);
    };
    // Close the modal and navigate to login page if registration is successful
    const handleModalClose = () => {
        setShowModal(false);
        if (modalOption === 'success') {
            navigate('/auth/login');
        }
    };

    return (
        <>
            <MainLayout>
                <RegistrationForm handleRegistration={handleRegistration} />
                <RegistrationModal showModal={showModal} modalOption={modalOption} handleModalClose={handleModalClose} />
                <hr />
                <Footer />
            </MainLayout>
        </>
    );
}
export default RegisterComponent;