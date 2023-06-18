import React from "react";
import MuscleSelect from "./MuscleSelect"
import MuscleInfo from "./MuscleInfo";

function TPMainComponent({ musclesNames, muscle, handleMuscleChange, dataVals }) {
    return (
      <div className="container">
        <h3 className="fw-bolder mt-5">Select Muscle:</h3>
        <br />
        <MuscleSelect musclesNames={musclesNames} muscle={muscle} handleMuscleChange={handleMuscleChange} />
        <br />
        {muscle && <MuscleInfo muscle={muscle} dataVals={dataVals} />}
        <hr />
      </div>
    );
  }
export default TPMainComponent;  