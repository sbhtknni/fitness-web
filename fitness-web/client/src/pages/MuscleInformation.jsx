/**
 * MuscleInformation page, this page is responsible for showing the user information about the muscle he chose
 * the page is responsible for the following:
 * 1. get the muscles names from the database
 * 2. get the information about the muscle the user chose
 * 3. display the information to the user
 */
import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import {
  getTrainingProgramas,
  getTrainingProgramasName,
} from "../controller/requests.js";
import ErrorPage from "./ErrorPage.jsx";
import MIMainComponent from "../componenets/MuscleInformationComp/MIMainComponent.jsx";
import Footer from "../componenets/GeneralComp/Footer.jsx";
import HelpAndTitle from "../componenets/GeneralComp/HelpAndTtile.jsx";
import { MDBContainer } from "mdb-react-ui-kit";

// MuscleInformation page component that is used to display the MuscleInformation page of the website
const MuscleInformation = () => {
  const [muscle, setMuscle] = useState("");
  const [error, setError] = useState(true);
  const [musclesNames, setMusclesNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataVals, setDataVals] = useState({
    link: [],
    topic: [],
    information: [],
    generalInformation: "",
  });
  // fetch the muscles names from the database
  useEffect(() => {
    const getDataMusclesNamesFromDB = async () => {
      await getMusclesNames();
      setLoading(false);
    };
    getDataMusclesNamesFromDB();
  }, []);
  // fetch the information about the muscle the user chose
  useEffect(() => {
    const fetchMuscleInformation = async () => {
      const response = await getTrainingProgramas(muscle);
      if (response === false) {
        setError(true);
      } else {
        // update the dataVals state with the information about the muscle
        const updatedData = {
          link: response.musclesInformation.topics.map((info) => info.link),
          topic: response.musclesInformation.topics.map((info) => info.topic),
          information: response.musclesInformation.topics.map(
            (info) => info.information
          ),
          generalInformation: response.musclesInformation.generalInformation,
        };
        setDataVals(updatedData);
        setError(false);
      }
    };

    if (muscle !== "") {
      fetchMuscleInformation();
    }
  }, [muscle]);
  // get the muscles names from the database
  const getMusclesNames = async () => {
    const response = await getTrainingProgramasName();
    if (response === false) {
      setError(true);
    } else {
      setError(false);
      setMusclesNames(response);
    }
  };
  // handle the muscle change
  const handleMuscleChange = (option) => {
    const selectedMuscle = musclesNames.find((muscle) => muscle === option);
    setMuscle(selectedMuscle);
  };

  if (error && !loading) {
    return <ErrorPage toRemove={true} />;
  }

  if (loading && !error) {
    return <ErrorPage toRemove={false} />;
  }

  if (!loading && !error) {
    return (
      <MainLayout>
        <MDBContainer className="py-4">
          <HelpAndTitle
            title="Muscle Information"
            button_name="Need Help ?"
            headline="Muscle Information "
            body="#Please make sure you choose the muscle that you want to learn about $click on radio button option$
            #After you choose the muscle you will see the information about the muscle 
            #You can click on the link to see the video about the muscle     
            "
          />
          <MIMainComponent
            musclesNames={musclesNames}
            muscle={muscle}
            handleMuscleChange={handleMuscleChange}
            dataVals={dataVals}
          />
          <Footer />
        </MDBContainer>
      </MainLayout>
    );
  }
};

export default MuscleInformation;
