import React from 'react';
import MainLayout from '../layout/MainLayout.jsx';

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
            <div className="home-page">
                <h1 style={style}>Welcome to my Fitness Web</h1>
                <p>My name is {name}</p>
                <p>My name is {name}</p>
            
            </div>
        </MainLayout>
    )
}

