import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import MainLayout from '../layout/MainLayout.jsx';
import RadioButton from '../componenets/radioButton.jsx';
import { Modal, Button } from 'react-bootstrap';


export function TrainingForm() {
  const [selectedTraining, setSelectedTraining] = useState();
  const [trainings, setTrainings] = useState([]);
  const [newWeight, setNewWeight] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalOption, setModalOption] = useState('');

  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await axios.get('http://localhost:3002/trainings');
        const data = response.data.trainings;
        setTrainings(data);
      } catch (error) {
        console.error('Error fetching trainings:', error);
      }
    };

    fetchTrainings();
  }, []);

  const handleTrainingChange = (option) => {
    const selectedTraining = trainings.find((training) => training.name === option);
    setSelectedTraining(selectedTraining);
  };

  const addTrainingProgram = async () => {
    if (newWeight === '') {
      setModalOption('emptyInput');
      setShowModal(true);
    } else {
      try {
        await axios.post('http://localhost:3002/trainings', {
          userID: localStorage.getItem('userId'),
          trainingName: selectedTraining.name,
          new_weight: newWeight,
        });
        setModalOption('success');
        setShowModal(true);
      } catch (error) {
        console.error('Error adding training program:', error);
        setModalOption('error');
        setShowModal(true);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrainingProgram();
  };

  return (
    <MainLayout>
      <div className="container">
        <h3>Select a training:</h3>
        <br />
        <div style={{ marginBottom: '20px' }} >
        <RadioButton
          options={trainings.map((training) => training.name)}
          selectedOption={selectedTraining ? selectedTraining.name : ''}
          onOptionChange={handleTrainingChange}
        />
      </div>

      

        {selectedTraining && (
          
          <div>
              <div className="d-flex justify-content-center">
              <form className="needs-validation justify-content-center" noValidate onSubmit={handleSubmit}>
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
                    <div className="invalid-feedback">Weight must be greater than 1.</div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit">
                      Add Training Program
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <br />
            <h5>Instructions:</h5>
            <p>{selectedTraining.instructions}</p> 

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {selectedTraining.videoUrls.map((url, index) => (
                <div key={index} className="col">
                  <div className="card h-100">
                    <ReactPlayer url={url} controls width="100%" height="auto" />
                    <div className="card-body">
                      <h5 className="card-title">Video {index + 1}</h5>
                    </div>
                    
                  </div>
                </div>
              ))}
              
            </div>

            <h5>Selected Training: {selectedTraining.name}</h5>

          </div>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Training Program</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Three Options to SHow */}
            {modalOption === 'emptyInput' && <p>Please enter a weight value.</p>}
            {modalOption === 'error' && <p>Error occurred while adding the training program.</p>}
            {modalOption === 'success' && <p>Training program added successfully.</p>}
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