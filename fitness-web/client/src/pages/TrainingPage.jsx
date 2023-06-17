import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import RadioButton from "../componenets/RadioButton.jsx";
import ErrorPage from "./ErrorPage.jsx";
import LoadLinks from "../componenets/TrainingPageComp/LoadLinks.jsx";
import InstructionsFormatter from "../componenets/TrainingPageComp/InstructionsFormatter.jsx";
import TrainingModal from "../componenets/TrainingPageComp/TrainingPageModal.jsx";
import { getTrainings, addTrainingToUser } from "../controller/requests.js";
import WeightInput from "../componenets/TrainingPageComp/WeightInput.jsx";

export function TrainingForm() {
  const [selectedTraining, setSelectedTraining] = useState();
  const [trainings, setTrainings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");

  useEffect(() => {
    const fetchTrainings = async () => {
      const response = await getTrainings();
      setTrainings(response);
    };
    fetchTrainings();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleTrainingChange = (option) => {
    const selectedTraining = trainings.find(
      (training) => training.name === option
    );
    setSelectedTraining(selectedTraining);
  };

  const addTrainingProgram = async (newWeight) => {

    if (
      newWeight === "" ||
      newWeight === undefined
    ) {
      setModalOption("emptyInput");
      setShowModal(true);
      return;
    } else {
      const response = addTrainingToUser(selectedTraining.name, newWeight);

      if (response) {
        setModalOption("success");
        setShowModal(true);
      } else {
        setModalOption("error");
        setShowModal(true);
      }
    }
  };

  //Load error page if bad request
  if (trainings === [] || !trainings[0]) {
    return <ErrorPage />;
  }

  return (
    <MainLayout>
      <div className="container">
        <h3 className="fw-bolder  mt-4">Select a training:</h3>
        <br />

        <RadioButton
          style={{ marginBottom: "30px" }}
          options={trainings.map((training) => training.name)}
          selectedOption={selectedTraining ? selectedTraining.name : ""}
          onOptionChange={handleTrainingChange}
        />

        <br />
        <br />
        {selectedTraining && (
          <div>
            <WeightInput addTrainingProgram={addTrainingProgram}></WeightInput>

            <br />

            <h5 className="fw-bolder  mt-4"> Instructions:</h5>
            <InstructionsFormatter text={selectedTraining.instructions} />
            <LoadLinks video_urls={selectedTraining.videoUrls} />
            <h5 className=" d-flex justify-content-center fw-bolder  mt-4">
              Selected Training: {selectedTraining.name}
            </h5>
          </div>
        )}

        <TrainingModal
          showModal={showModal}
          setShowModal={setShowModal}
          modalOption={modalOption}
        />
      </div>
    </MainLayout>
  );
}

export default TrainingForm;