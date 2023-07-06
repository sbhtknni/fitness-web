/**
 * MuscleInfo component displays the information about the muscle that the user has selected.
 * It is used in MIMainComponent.jsx
 * It shows the information about the muscle and handles the selection of a muscle
 */
import React from "react";
import { Link } from 'react-router-dom';

function MuscleInfo({ muscle, dataVals }) {
  return (
    <div className="container ">
      <div className="jumbotron ">
        <div className="container">
          <h1 className="display-3">Muscle {muscle}</h1>
          <p>{dataVals.generalInformation}</p>
          <p>
            <Link className="btn btn-primary btn-lg" to="/training" role="button">
              Choose workout »
            </Link>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {dataVals.topic.map((topicItem, index) => (
            <div className="col-md-4" key={index}>
              <h2>{topicItem}</h2>
              <p>{dataVals.information[index]}</p>
              {index === 0 ? (
                <p>
                  <a className="btn btn-secondary" href={dataVals.link[index]} role="button">
                    Go to the website »
                  </a>
                </p>
              ) : index === 1 ? (
                <p>
                  <img src={dataVals.link[index]}  />
                </p>
              ) : index === 2 ? (
                <p>
                  <iframe width="350" height="220" src={dataVals.link[index]} title="Video" allowFullScreen></iframe>
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MuscleInfo;