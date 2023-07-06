/**
 * MIMainComponent
 * it is the main component of the Muscle Information page
 * It uses MuscleSelect.jsx and MuscleInfo.jsx
 * It shows the list of muscles and handles the selection of a muscle 
 * and shows the information about the muscle that the user has selected.
 */
import React from "react";
import MuscleSelect from "./MuscleSelect"
import MuscleInfo from "./MuscleInfo";

function TPMainComponent({ musclesNames, muscle, handleMuscleChange, dataVals }) {
  return (
    <>
      <h3 className="fw-bolder mt-5">Select Muscle:</h3>
      <br />
      <MuscleSelect musclesNames={musclesNames} muscle={muscle} handleMuscleChange={handleMuscleChange} />
      <br />
      {muscle && <MuscleInfo muscle={muscle} dataVals={dataVals} />}
      <hr />
    </>
  );
}
export default TPMainComponent;  