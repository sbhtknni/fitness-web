import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout.jsx';
import { getTrainingProgramas } from "../controller/requests.js";
import { Link } from 'react-router-dom';
import ErrorPage from "./ErrorPage.jsx";



const TrainingProgramas = () => {
    const [muscle, setMuscle] = useState();
    const [generalInformation, setGeneralInformation] = useState();
    const [topic, setTopicsVals] = useState([]);
    const [information, setInformation] = useState([]);
    const [link, setLink] = useState([]);
    const [error, setError] = useState(false);
    let data = [];

    useEffect(() => {
        const fetchmuscleInformation = async () => {
            console.log("New fetch");
            const response = await getTrainingProgramas();
            if (response === []) {
                setError(true);
                return;
            }
            console.log("Response: ", response);
            data = response;
            setAllData();
        };

        const setAllData = async () => {

            setMuscle(data.musclesInformation.muscle);
            setGeneralInformation(data.musclesInformation.generalInformation);
            setTopicsVals(data.musclesInformation.topics.map((info) => info.topic));
            setInformation(data.musclesInformation.topics.map((info) => info.information));
            setLink(data.musclesInformation.topics.map((info) => info.link));

        };

        fetchmuscleInformation();
    }, []);

    if (error) {
        return <ErrorPage toRemove={true} />;
    }
    else {
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
}
export default TrainingProgramas;