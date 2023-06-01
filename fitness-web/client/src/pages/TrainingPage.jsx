import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import MainLayout from "../layout/MainLayout.jsx";
import RadioButton from "../componenets/radioButton.jsx";
import { Modal, Button } from "react-bootstrap";
import ErrorPage from "./ErrorPage.jsx";
import { useCookies } from "react-cookie";
import VideoLink from "../componenets/TrainingPageComp/VideoLink.jsx";
import LoadLinks from "../componenets/TrainingPageComp/LoadLinks.jsx";
import { MDBBtn } from "mdb-react-ui-kit";
import WeightInput from "../componenets/TrainingPageComp/WeightInput.jsx";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import InstructionsFormatter from "../componenets/TrainingPageComp/InstructionsFormatter.jsx";
export function TrainingForm() {
  const [selectedTraining, setSelectedTraining] = useState();
  const [trainings, setTrainings] = useState([]);
  const [newWeight, setNewWeight] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState("");
  const [error_response, setError] = useState(false);
  //get from cookies access token
  // Inside your component
  const [cookies] = useCookies(["access_token"]);
  const accessToken = cookies.access_token;

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await axios.get("http://localhost:3002/trainings");
        const data = response.data.trainings;
        setTrainings(data);
      } catch (error) {
        setError(true);
        console.error("Error fetching trainings:", error);
      }
    };

    fetchTrainings();
  }, []);

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
  return (
    <MainLayout>
      <div className="container">
      <h3 className="fw-bolder  mt-4">Select a training:</h3>
        <br />
        <div style={{ marginBottom: "20px" }}>
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
                    {/* <MDBInput
                        value={email}
                        name="email"
                        //onChange={handleEmailChange}
                        id="email"
                        required
                        label="Email address"
                        type="email"
                        size="lg"
                        labelClass="text-white"
                        style={{ color: "white" }}
                      /> */}
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

            <h5 className="fw-bolder  mt-4" > Instructions:</h5>
            <p>{selectedTraining.instructions}</p>
            <InstructionsFormatter text={selectedTraining.instructions} />
            <LoadLinks video_urls={selectedTraining.videoUrls} />

            <div className="d-flex justify-content-center">
            <h5 className="fw-bolder  mt-4" >Selected Training: {selectedTraining.name}</h5>
            </div>
          </div>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Training Program</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Three Options to SHow */}
            {modalOption === "emptyInput" && (
              <p>Please enter a weight value.</p>
            )}
            {modalOption === "error" && (
              <p>Error occurred while adding the training program.</p>
            )}
            {modalOption === "success" && (
              <p>Training program added successfully.</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </MainLayout>
  );
}

export default TrainingForm;
