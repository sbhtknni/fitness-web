import React, { useState, useEffect } from 'react';
import NavigationBar from '../componenets/NavigationBar';
import axios from 'axios';
import ReactPlayer from 'react-player';
import Modal from '../componenets/modal';
import RadioButton from '../componenets/radioButton';
import MainLayout from '../layout/MainLayout.jsx';

export function DropdownForm() {
  const [selectedTraining, setSelectedTraining] = useState();
  const [trainings, setTrainings] = useState([]);
  const [newWeight, setNewWeight] = useState();

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
    try {
      await axios.post('http://localhost:3002/trainings', {
        userID: localStorage.getItem('userId'),
        trainingName: selectedTraining.name,
        new_weight: newWeight
      });
    } catch (error) {
      console.error('Error adding training program:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <MainLayout>
      
      <div className="container">
        <h3>Select a training:</h3>
        <RadioButton
          options={trainings.map((training) => training.name)}
          selectedOption={selectedTraining ? selectedTraining.name : ''}
          onOptionChange={handleTrainingChange}
        />

        {selectedTraining && (
          <div>
            <h3>Selected Training: {selectedTraining.name}</h3>
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

            <div className="d-flex justify-content-center">
              <form className="needs-validation justify-content-center" noValidate onSubmit={handleSubmit}>
                <div className="">
                  <div className="form-outline">
                    <input
                      type="number"
                      className="form-control input-primary"
                      id="newWeight"
                      min="0"
                      onChange={(event) => setNewWeight(event.target.value)}
                      required
                    />
                    <label htmlFor="newWeight" className="form-label">
                      Enter Weight
                    </label>
                    <div className="invalid-feedback">Weight must be greater than 1.</div>
                  </div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={addTrainingProgram}
                  >
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
     </MainLayout>

  );
}

export default DropdownForm;