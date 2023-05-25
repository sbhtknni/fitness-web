import React from 'react';
import MainLayout from '../layout/MainLayout.jsx';
import Modal from '../componenets/modal.jsx';

export default function HomePage(props) {
    const { name } = props;
    //style
    const style= {
        
        color:'blue',
        fontSize:'18px',
    }
    // if (name.length >3) {
    //     style.color='red'
    // }
//create new html page
    return (
        <MainLayout>
  <Modal Isleftbutoon="false" title="Training added succefully" information ="good" rightbutton="g" ></Modal>
  </MainLayout>
    )
}

