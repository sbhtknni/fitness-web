import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout.jsx';
import { getTrainingProgramas,getTrainingProgramasName } from "../controller/requests.js";
import { Link } from 'react-router-dom';
import ErrorPage from "./ErrorPage.jsx";
import RadioButton from "../componenets/RadioButton.jsx";




const TrainingProgramas = () => {
    const [muscle, setMuscle] = useState("Back");
    const [error, setError] = useState(false);
    const [data, setData] = useState([]); 
    //const [muscles, setMuscles] = useState([]);
    const [musclesNames, setMusclesNames] = useState([]);   
    const [loading, setLoading] = useState(true);
    const [dataVals, setDataVals] = useState({
        link: [],
        topic: [],
        information: [],
        generalInformation: "",
    });
    

    useEffect(() => {
        const getDataMusclesNamesFromDB = async () => {
            await getMusclesNames();
            console.log("Muscle names innn: ", musclesNames);
            // await setMusclesValue();
            console.log("Muscle valll: ", muscle);

        }
        getDataMusclesNamesFromDB();
    }, []);
    
    useEffect(() => {
        const getData = async () => {
            await fetchmuscleInformation(muscle);
            setLoading(false); // Set loading to false once data is fetched
        }
        getData();
    }, [muscle]);

    const getMusclesNames = async () => {
        const response = await getTrainingProgramasName();
        if (response === []) {
            setError(true);
            return;
        }
        setMusclesNames(response); 
    }
    
    const fetchmuscleInformation = async (muscle) => {
        console.log("In fetchmuscleInformation");
        console.log("Muscle in fetch: ", muscle);
        const response = await getTrainingProgramas(muscle);
        if (response === []) {
            setError(true);
            return;
        }
        console.log("Response: ", response);
        setData(response);
        setAllData(response);
    };

    const setAllData = async (data) => {
        const updatedData = {
            ...dataVals,
            link: data.musclesInformation.topics.map((info) => info.link),
            topic: data.musclesInformation.topics.map((info) => info.topic),
            information: data.musclesInformation.topics.map((info) => info.information),
            generalInformation: data.musclesInformation.generalInformation,
        };
        setDataVals(updatedData);       
    };

    const handleMuscleChange = (option) => {
        const selectedMuscle = musclesNames.find(
            (muscle) => muscle === option
        );
        setMuscle(selectedMuscle);
    };
    

    if (error) {
        return <ErrorPage toRemove={true} />;
    }
    if (loading) {
        console.log("Loading");
        return <ErrorPage toRemove={false} />;
    } else {
        return (
            <MainLayout>
                <div className="">
                <RadioButton
                    style={{ marginBottom: "30px" }}
                    options={musclesNames}
                    selectedOption={muscle ? muscle.name : ""}
                    onOptionChange={handleMuscleChange}
                />    
                </div>
                {muscle && (<body className="vsc-initialized">
                    <main role="main">
                        <div className="jumbotron">
                            <div className="container">
                                
                                <h1 className="display-3">Muscle {muscle}</h1>
                                <p>{dataVals.generalInformation} </p>
                                <p>
                                    <Link className="btn btn-primary btn-lg" to="/training" role="button">
                                        Choose workout »
                                    </Link>
                                </p>
                                
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {dataVals.topic.map((topicItem, index) => (
                                    <div className="col-md-4" key={index}>
                                        <h2>{topicItem}</h2>
                                        <p>{dataVals.information[index]}</p>
                                        {index === 0 ? (
                                            <p>
                                                <a className="btn btn-secondary" href={dataVals.link[index]} role="button">
                                                    Go to the website »
                                                </a>
                                            </p>
                                        ) : index === 1 ? (
                                            <p>
                                                <img src={dataVals.link[index]} alt="Picture" />
                                            </p>
                                        ) : index === 2 ? (
                                            <p>
                                                <iframe width="350" height="220" src={dataVals.link[index]} title="Video" frameborder="0" allowfullscreen></iframe>
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
                )}
            </MainLayout>
        );
    };
}
export default TrainingProgramas;