import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationModal from "./RegistrationModal";
import RegistrationForm from "./RegistrationForm";
import MainLayout from '../../layout/MainLayout';
import Footer from '..//Footer.jsx';

function RegisterComponent() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [modalOption, setModalOption] = useState('');

    const handleRegistration = (option) => {
        setModalOption(option);
        setShowModal(true);
    };

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