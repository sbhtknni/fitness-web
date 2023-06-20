import React from 'react';
import ReactPlayer from 'react-player';

const TrainingVideos = ({ selectedTraining }) => {
  return (
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
  );
};

export default TrainingVideos;
