import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

// bootstrap imports
import { MDBBtn } from 'mdb-react-ui-kit';

const TrainingProgramas = () => {
    const [muscle, setMuscle] = useState();
    const [generalInformation, setGeneralInformation] = useState();
    const [topic, setTopicsVals] = useState([]);
    const [information, setInformation] = useState([]);
    const [link, setLink] = useState([]);

    useEffect(() => {
        const fetchmuscleInformation = async () => {
            
            try {
                const response = await axios.get(`http://localhost:3002/muscle/${localStorage.getItem('selectedTrainingInfo')}`);
                const data = response.data;
        
                const topics = data.musclesInformation.topics;
        
                const topicValues = topics.map((info) => info.topic);
                const informationValues = topics.map((info) => info.information);
                const linkValues = topics.map((info) => info.link);
        
                setMuscle(data.musclesInformation.muscle);
                setGeneralInformation(data.musclesInformation.generalInformation);
                setTopicsVals(topicValues);
                setInformation(informationValues);
                setLink(linkValues);
            } catch (error) {
                console.error('Error fetching muscleInformation:', error);
            }
        };

        fetchmuscleInformation();
    }, [localStorage.getItem('selectedTrainingInfo')]); // Add local storage as a dependency

    return (

        <MainLayout>
            <body className="vsc-initialized">
                <main role="main">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3">Muscle {muscle}</h1>
                            <p>{generalInformation} </p>
                            <p>
                                <Link className="btn btn-primary btn-lg" to="/training" role="button">
                                Choose workout »
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {topic.map((topicItem, index) => (
                                <div className="col-md-4" key={index}>
                                    <h2>{topicItem}</h2>
                                    <p>{information[index]}</p>
                                    {index === 0 ? (
                                        <p>
                                            <a className="btn btn-secondary" href={link[index]} role="button">
                                               Go to the website »
                                            </a>
                                        </p>
                                    ) : index === 1 ? (
                                        <p>
                                            <img src={link[index]} alt="Picture" />
                                        </p>
                                    ) : index === 2 ? (
                                        <p>
                                            <iframe width="350" height="220" src={link[index]} title="Video" frameborder="0" allowfullscreen></iframe>
                                        </p>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                        <hr />  
                    </div>
                </main>

                <footer className="container">
                    <p>© RD company since 2023</p>
                </footer>
            </body>

        </MainLayout>
    );
};

export default TrainingProgramas;