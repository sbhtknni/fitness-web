import React from 'react';

function InstructionsFormatter({ text }) {
  const instructions = text.split('#').filter(instruction => instruction.trim() !== '');

  return (
    <div>
      {instructions.map((instruction, index) => {
        const parts = instruction.split('$').filter(part => part.trim() !== '');

        if (parts.length === 1) {
          return (
            <p key={index}>
              {parts[0].trim()}
            </p>
          );
        } else {
          const mainTask = parts[0].trim();
          const subTasks = parts.slice(1).map(subTask => subTask.trim());

          return (
            <div key={index}>
              {mainTask}
              <ul>
                {subTasks.map((subTask, subIndex) => (
                  <li key={subIndex}>
                    {subTask}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
}

export default InstructionsFormatter;
