import React, { useState, useEffect } from 'react';
import NavigationBar from '../componenets/NavigationBar';
import axios from 'axios';
import Modal from '../componenets/modal';
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

  const handleTrainingChange = (event) => {
    const trainingIndex = parseInt(event.target.value);
    const selectedTraining = trainings[trainingIndex];
    setSelectedTraining(selectedTraining);
  };
  
  
    const add_Training_Program = async () => {
      try {
        const response = await axios.post('http://localhost:3002/trainings', {userID : localStorage.getItem('userId') , trainingName : selectedTraining.name , new_weight:newWeight });
      }
        catch (error) {
        console.error('Error fetching trainings:', error);
      }
    }
  
    const [number, setNumber] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
    };

    
    

  return (
    <>

      <NavigationBar />
      <div className="container">
        <h3>Select a training:</h3>
        <div className="btn-group shadow-0">
          {trainings.map((training, index) => (
            <div key={index} className="form-check">
              <input
                type="radio"
                id={`training-${index}`}
                name="training"
                value={index}
                onChange={handleTrainingChange}
                checked={selectedTraining && selectedTraining.name === training.name}
                className="form-check-input"
              />
              <label htmlFor={`training-${index}`} className="form-check-label">
                {training.name}
              </label>
            </div>
          ))}
        </div>

        {selectedTraining && (
          <div>
            <h3>Selected Training: {selectedTraining.name}</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {selectedTraining.videoUrls.map((url, index) => (
                <div key={index} className="col">
                  <div className="card h-100">
                    <video controls className="card-img-top">
                      <source src={url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="card-body">
                      <h5 className="card-title">Video {index + 1}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div class="d-flex justify-content-center">
            <form className="needs-validation justify-content-centers" noValidate onSubmit={handleSubmit}>
    <div class="">
      <div class="form-outline">
        <input type="number" class="form-control input-primary" id="newWeight" min="0" onChange={(event) => setNewWeight(event.target.value)} required  />
        <label for="newWeight" class="form-label">Enter Weight</label>
        <div class="invalid-feedback">Weight must be greater than 1.</div>
      </div>
      <button class="btn btn-primary" type="submit" disabled={number === 1} onClick={add_Training_Program} >
        Submit form
        {/* <Modal ></Modal> */}

      </button>
      
    </div>
</form>
</div>

          </div>
          
        )}
        
      </div>




    </>
  );
}

export default DropdownForm;