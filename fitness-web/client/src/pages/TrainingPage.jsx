/**
 * training page component, this page is used to add a new training program to the user
 * the user can choose from a list of training programs and add it to his account 
 * the user can also add his weight to the training program and see his progress
 * the user can also see the instructions of the training program
 * the user can also see the training program in a video
 */
import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import LoadLinks from "../componenets/TrainingPageComp/LoadLinks.jsx";
import InstructionsFormatter from "../componenets/TrainingPageComp/InstructionsFormatter.jsx";
import TrainingModal from "../componenets/TrainingPageComp/TrainingPageModal.jsx";
import { getTrainings, addTrainingToUser } from "../controller/requests.js";
import WeightInput from "../componenets/TrainingPageComp/WeightInput.jsx";
import Footer from "../componenets/GeneralComp/Footer.jsx";
import HelpAndTitle from "../componenets/GeneralComp/HelpAndTtile.jsx";
import RadioButton from "../componenets/GeneralComp/RadioButton.jsx";
import { MDBContainer } from "mdb-react-ui-kit";

//Training page component that is used to display the training page of the website
export function TrainingForm() {
  const [selectedTraining, setSelectedTraining] = useState();
  const [trainings, setTrainings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  // fetch the training programs from the database
  useEffect(() => {
    const fetchTrainings = async () => {
      const response = await getTrainings();
      if (response === false) {
        setError(true);
        setLoading(false);
      } else {
        setTrainings(response);
        setLoading(false);
        setError(false);
      }
    };
    fetchTrainings();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  // handle the change of the training program
  const handleTrainingChange = (option) => {
    const selectedTraining = trainings.find(
      (training) => training.name === option
    );
    setSelectedTraining(selectedTraining);
  };
  // add the training program base the weight to the user account
  const addTrainingProgram = async (newWeight) => {
    if (
      newWeight === "" ||
      newWeight === undefined ||
      newWeight > 250 ||
      newWeight < 40
    ) {
      setModalOption("emptyInput");
      setShowModal(true);
      return;
    }
    // add the training program to the user account
    const response = addTrainingToUser(selectedTraining.name, newWeight);
    if (response) {
      setModalOption("success");
      setShowModal(true);
    } else {
      setModalOption("error");
      setShowModal(true);
    }
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
        <div className="container ">
          <MDBContainer>
            <HelpAndTitle
              title="Choose Training Program"
              button_name="Need Help ?"
              headline="Add New Training "
              body="#Please make sure you choose the training program that is right for you $click on radio button option$
                 #Make sure you enter a weight within a normal range $enter a vaild number , will become green when ok $
                #Click Submit"
            />
            <br />

            <RadioButton
              options={trainings.map((training) => training.name)}
              selectedOption={selectedTraining ? selectedTraining.name : ""}
              onOptionChange={handleTrainingChange}
            />

            <br />
            <br />
          </MDBContainer>
          {selectedTraining && (
            <>
              <WeightInput
                addTrainingProgram={addTrainingProgram}
              ></WeightInput>
              <br />
              <h5 className="fw-bolder  mt-4"> Instructions:</h5>
              <InstructionsFormatter text={selectedTraining.instructions} />
              <br />
              <LoadLinks video_urls={selectedTraining.videoUrls} />
              <h5 className=" d-flex justify-content-center fw-bolder  mt-4">
                Selected Training: {selectedTraining.name}
              </h5>
            </>
          )}

          <TrainingModal
            showModal={showModal}
            setShowModal={setShowModal}
            modalOption={modalOption}
          />
          <hr />
        </div>
        <Footer />
      </MainLayout>
    );
  }
}

export default TrainingForm;
