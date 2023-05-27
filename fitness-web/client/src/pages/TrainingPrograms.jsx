import React, { useState, useEffect } from 'react'
import MainLayout from '../layout/MainLayout.jsx';
import YoutubeTrainingsPrograms from '../hooks/TrainingProgramsHook/YoutubeTrainingsPrograms.jsx';
import TrainingInformation from '../componenets/TrainingProgramsComp/TrainingInformation.jsx';
import axios from 'axios';



const TrainingProgramas = () => {
    const [muscle, setMuscle] = useState();
    const [generalInformation, setGeneralInformation] = useState();
    const [topics, setTopics] = useState([]);
    const [topic, setTopicsVals] = useState([]);
    const [information, setInformation] = useState([]);
    const [link, setLink] = useState([]);

    useEffect(() => {
        const fetchmuscleInformation = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/muscle/${localStorage.getItem('selectedTrainingInfo')}`);
                const data = response.data;

                setMuscle(data.musclesInformation.muscle);
                setGeneralInformation(data.musclesInformation.generalInformation);
                setTopics(data.musclesInformation.topics);
                setTopicsVals(data.musclesInformation.topics.map((info) => info.topic))
                setInformation(data.musclesInformation.topics.map((info) => info.information))
                setLink(data.musclesInformation.topics.map((info) => info.link))
            } catch (error) {
                console.error('Error fetching muscleInformation:', error);
            }
        };

        fetchmuscleInformation();
    }, []);

    return (
        <MainLayout>

            <body className="vsc-initialized">
                <main role="main">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3">Muscle {muscle}</h1>
                            <p>{generalInformation} </p>
                            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {topic.map((topicItem, index) => (
                                <div className="col-md-4" key={index}>
                                    <h2>{topicItem}</h2>
                                    <p>{information[index]}</p>
                                    {link[index] ? (
                                        <p>
                                            <a className="btn btn-secondary" href={link[index]} role="button">
                                                View details »
                                            </a>
                                        </p>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                        <hr />
                    </div>    
                </main>

                <footer className="container">
                    <p>© Company 2017-2018</p>
                </footer>
            </body>
            <YoutubeTrainingsPrograms />
            {<TrainingInformation />}
        </MainLayout>
    )
};
export default TrainingProgramas 