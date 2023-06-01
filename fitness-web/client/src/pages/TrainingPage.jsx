import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../layout/MainLayout.jsx";
import RadioButton from "../componenets/radioButton.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { useCookies } from "react-cookie";
import VideoLink from "../componenets/TrainingPageComp/VideoLink.jsx";
import LoadLinks from "../componenets/TrainingPageComp/LoadLinks.jsx";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import InstructionsFormatter from "../componenets/TrainingPageComp/InstructionsFormatter.jsx";
import TrainingModal from "../componenets/TrainingPageComp/TrainingPageModal.jsx";

export function TrainingForm() {
  const [selectedTraining, setSelectedTraining] = useState();
  const [trainings, setTrainings] = useState([]);
  const [newWeight, setNewWeight] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [error_response, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(true); // State to track loading state

  const [access_token, setAccessToken] = useState(
    window.localStorage.getItem("access_token")
  );
  //get from cookies access token
  // Inside your component

  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      fetchData();
    }
  }, [!dataFetched]); // Empty dependency array to run the effect only once when the component mounts

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3002/trainings", {
        headers: { Authorization: `Bearer ${access_token}` },
      });
      setTrainings(response.data.trainings);
      setIsLoading(false);
      setDataFetched(true);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
    }
  }

  const handleTrainingChange = (option) => {
    const selectedTraining = trainings.find(
      (training) => training.name === option
    );
    setSelectedTraining(selectedTraining);
  };

  const addTrainingProgram = async () => {
    if (newWeight === "") {
      setModalOption("emptyInput");
      setShowModal(true);
    } else {
      try {
        await axios.post("http://localhost:3002/trainings", {
          userID: localStorage.getItem("userId"),
          trainingName: selectedTraining.name,
          new_weight: newWeight,
        });
        setModalOption("success");
        setShowModal(true);
      } catch (error) {
        console.error("Error adding training program:", error);
        setModalOption("error");
        setShowModal(true);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrainingProgram();
  };

  //Load error page if bad request
  if (error_response) {
    return <ErrorPage />;
  }
  if (isLoading) {
    return <div>Loading...</div>; // Render a loading indicator while data is being fetched
  }

  return (
    <MainLayout>
      <div className="container">
        <h3 className="fw-bolder  mt-4">Select a training:</h3>
        <br />
        <div style={{ marginBottom: "30px" }}>
          <RadioButton
            options={trainings.map((training) => training.name)}
            selectedOption={selectedTraining ? selectedTraining.name : ""}
            onOptionChange={handleTrainingChange}
          />
        </div>
        {/* <MDBContainer
        onSubmit={handleSubmit}
        className="vh-100 gradient-custom"
        fluid>
          <MDBBtn rippleUnbound rippleColor='green' type='submit'>
                  Add Training Program
                </MDBBtn>
      </MDBContainer> */}
        {selectedTraining && (
          <div>
            <div className="d-flex justify-content-center">
              <form
                className="needs-validation justify-content-center"
                noValidate
                onSubmit={handleSubmit}>
                <div className="">
                  <div className="form-outline">
                    <input
                      type="number"
                      className="form-control input-primary"
                      id="newWeight"
                      min="0"
                      value={newWeight}
                      onChange={(event) => setNewWeight(event.target.value)}
                      required
                    />
             
                    <label htmlFor="newWeight" className="form-label">
                      Enter Weight
                    </label>
                    <div className="invalid-feedback">
                      Weight must be greater than 1.
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <br />

            <h5 className="fw-bolder  mt-4"> Instructions:</h5>
            <InstructionsFormatter text={selectedTraining.instructions} />
            <LoadLinks video_urls={selectedTraining.videoUrls} />
            {/* Remember to adjust the training intensity and exercises based on your fitness level and any specific goals or limitations you may have. Stay hydrated, listen to your body, and consult a healthcare professional if needed before starting any new exercise program. */}
            <div className="d-flex justify-content-center">
              <h5 className="fw-bolder  mt-4">
                Selected Training: {selectedTraining.name}
              </h5>
            </div>
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
