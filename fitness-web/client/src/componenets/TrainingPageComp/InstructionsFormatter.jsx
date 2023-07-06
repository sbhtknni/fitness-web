import React from "react";

//One of the components that are used in many pages and components
//Used in many components and pages
//How it works:
//The string is split by "#" and then by "$"
//The first part is the main task and the rest are sub tasks
//For example: "#Main task$Sub task 1$Sub task 2"
//Will be shown as:  
//Main task
//  * Sub task 1
//  * Sub task 2
function InstructionsFormatter({ text }) {
  const instructions = text
    .split("#")
    .filter((instruction) => instruction.trim() !== "");

  return (
    <>
      {instructions.map((instruction, index) => {
        const parts = instruction
          .split("$")
          .filter((part) => part.trim() !== "");

        if (parts.length === 1) {
          return (
            <div key={index}>
              <strong>{parts[0].trim()}</strong>
            </div>
          );
        } else {
          const mainTask = parts[0].trim();
          const subTasks = parts.slice(1).map((subTask) => subTask.trim());

          return (
            <div key={index}>
              <strong>{mainTask}</strong>
              <ul>
                {subTasks.map((subTask, subIndex) => (
                  <li style={{ color: "#616161" }} key={subIndex}>
                    {subTask}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </>
  );
}

export default InstructionsFormatter;
