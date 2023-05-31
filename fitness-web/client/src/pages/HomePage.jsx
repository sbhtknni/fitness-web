import React from 'react'
import MainLayout from '../layout/MainLayout.jsx';
import { Link } from 'react-router-dom';
import * as mdb from 'mdb-ui-kit'; // lib
import 'mdb-ui-kit/css/mdb.min.css';



function HomePage  () {
    


    
    return (
        
        <MainLayout>
 
            <body className="vsc-initialized">
                <main role="main">
                    
                <div className="jumbotron">
                <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                        <h1 className="display-3">Hello Trainer!</h1>
                        <p>Achieve your fitness goals with our cutting-edge programs. Join our community of fitness enthusiasts and embark on a transformative journey towards a stronger, healthier you. Get started today and unlock your full potential. Welcome to a world of fitness excellence!</p>
                        <p>
                        <Link className="btn btn-primary btn-lg" to="/auth/signup" role="button">Sign Up  »</Link>
                        </p>
                    </div>
                    <div className="col-md-4 ">
                        <img className="img-fluid " src="https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-signature.webp" alt="Fitness" />
                    </div>
                    </div>
                </div>
                </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 bg-image hover-zoom overflow-visible ">
                          
                                <img  className="col-md-10" src="https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-left.png" ></img>

                            </div>

                            <div className="col-md-4 ">
                                <h2>Already Have an Account?</h2>
                                <p>Log in now.</p>
                                <p><Link className="col-md-12 btn btn-primary" to="auth/login" role="button">Log In  »</Link></p>
                            </div>

                            <div className="col-md-4 bg-image hover-zoom overflow-visible ">
                            <img  className="col-md-10 "  src="https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-right.png" ></img>
                            </div>
                        </div>

                        <hr />
                    </div>
                </main>

                <footer className="container">
                    <p>© RD company since 2023</p>
                </footer>
            </body>
 
        </MainLayout>
    )
};
export default HomePage;
