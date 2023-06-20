import React from 'react'
import MainLayout from '../layout/MainLayout.jsx';
import HomePageJumbotron from '../componenets//HomePageComp//HomePageJumbotron.jsx';
import HomeMainSection from '../componenets//HomePageComp//HomeMainSection.jsx';
import Footer from '..//componenets//General//Footer.jsx';



function HomePage() {

    return (

        <MainLayout>
            <body className="vsc-initialized ">
                <main role="main">
                    <HomePageJumbotron />
                    <HomeMainSection />
                </main>
                <Footer  />
            </body>

        </MainLayout>
    )
};
export default HomePage;
