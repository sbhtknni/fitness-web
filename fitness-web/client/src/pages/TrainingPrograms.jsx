import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import {
  getTrainingProgramas,
  getTrainingProgramasName,
} from "../controller/requests.js";
import ErrorPage from "./ErrorPage.jsx";
import TPMainComponent from "../componenets/TrainingProgramsComp/TPMainComponent.jsx";
import Footer from "..//componenets//Footer.jsx";
import HelpAndTitle from "../componenets/HelpAndTtile.jsx";

const TrainingProgramas = () => {
  const [muscle, setMuscle] = useState("");
  const [error, setError] = useState(true);
  const [musclesNames, setMusclesNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);
  const [dataVals, setDataVals] = useState({
    link: [],
    topic: [],
    information: [],
    generalInformation: "",
  });

  // get all muscles names from DB on first render
  useEffect(() => {
    const getDataMusclesNamesFromDB = async () => {
      await getMusclesNames();
      setLoading(false);

    };
    getDataMusclesNamesFromDB();
  }, []);

// get all muscles information from DB
useEffect(() => {
  const getData = async () => {
    await fetchmuscleInformation();
  };
  getData();
// eslint-disable-next-line 
}, [muscle]);

  // get all muscles names from DB and set it to musclesNames
  const getMusclesNames = async () => {
    const response = await getTrainingProgramasName();
    if (response === false) {
        console.log("response", response);
      setLoading(false);
      return;
    } else {
      setError(false);

      setMusclesNames(response);
    }
  };

  // get all muscles information from DB and set it to data
  const fetchmuscleInformation = async () => {
    const response = await getTrainingProgramas(muscle);
    if (response === []) {
      return;
    } else {
      setAllData(response);
    }
  };

  // set all data to dataVals
  const setAllData = async (data) => {
    if (flag === true) {
      const updatedData = {
        ...dataVals,
        link: data.musclesInformation.topics.map((info) => info.link),
        topic: data.musclesInformation.topics.map((info) => info.topic),
        information: data.musclesInformation.topics.map(
          (info) => info.information
        ),
        generalInformation: data.musclesInformation.generalInformation,
      };

      setDataVals(updatedData);
    }
  };
  // handle muscle change ant flag to true to update dataVals with new data
  const handleMuscleChange = (option) => {
    const selectedMuscle = musclesNames.find((muscle) => muscle === option);
    setMuscle(selectedMuscle);
    setFlag(true);
  };

  // if error return error page
  if (error && !loading) {
    return <ErrorPage toRemove={true} />;
  }
  // if loading the data return loading page
  if (loading && !error) {
    return <ErrorPage toRemove={false} />;
  }
  if (!loading && !error) {
    return (
      <MainLayout>
              <HelpAndTitle
          title="Muscle Information"
            button_name="Need Help ?"
            headline="Muscle Information "
            body="#Please make sure you choose the muscle that you want to learn about $click on radio button option$
            #After you choose the muscle you will see the information about the muscle 
            #You can click on the link to see the video about the muscle
            
            "
          />
        <TPMainComponent
          musclesNames={musclesNames}
          muscle={muscle}
          handleMuscleChange={handleMuscleChange}
          dataVals={dataVals}
        />
        <Footer />
      </MainLayout>
    );
  }
};
export default TrainingProgramas;
