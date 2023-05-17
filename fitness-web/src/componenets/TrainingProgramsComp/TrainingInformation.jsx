import React from 'react';
import Back from '../../assets/TrainingProgramsAssets/Back.png'
function TrainingInformation() {
  const subjects = [
    {
      name: 'Back',
      imageSrc: Back,
      info: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
      ],
    },
    {
      // TODO: change the imageSRC
      name: 'Chest',
      imageSrc: 'chest-image.jpg',
      info: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
      ],
    },
    {
      // TODO: change the imageSRC
      name: 'Legs',
      imageSrc: 'legs-image.jpg',
      info: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
      ],
    },
    {
      // TODO: change the imageSRC
      name: 'Hands',
      imageSrc: 'hands-image.jpg',
      info: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
      ],
    },
    {
      // TODO: change the imageSRC
      name: 'Shoulders',
      imageSrc: 'shoulders-image.jpg',
      info: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, maxime pariatur ratione eligendi voluptatibus ad minima, culpa sed quod rerum cumque minus quasi, beatae expedita odio quibusdam. Eaque, laudantium provident!',
      ],
    },
  ];


  return (
    <div>
      <h1>Subjects</h1>
    {subjects.map((subject, index) => (
      <div key={index}>
        <h2>{subject.name}</h2>
        <img src={subject.imageSrc} alt={subject.name}  />

        <div>
          <table>
            <tbody>
              {subject.info.reduce((rows, info, index) => {
                if (index % 3 === 0) {
                  rows.push([]);
                }
                rows[rows.length - 1].push(
                  <td key={index} style={{ width: '33.33%' }}>
                    {info}
                  </td>
                );
                return rows;
              }, []).map((row, rowIndex) => (
                <tr key={rowIndex}>{row}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
  );
}

export default TrainingInformation;
