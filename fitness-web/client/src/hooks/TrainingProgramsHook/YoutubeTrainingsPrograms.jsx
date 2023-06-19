import React, { useState } from 'react'
import YotubeTable from '../../componenets/TrainingProgramsComp/YotubeTable';

const YoutubeTrainingsPrograms = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const getCategoryLinks = () => {
        const back = [
            [
              {
                src: 'https://www.youtube.com/embed/EMKrh3naOBg',
                title: 'Back Video 1',
              },
              {
                src: 'https://www.youtube.com/embed/YvKOvyiAdAI',
                title: 'Back Video 2',
              },
            ],
            [
              {
                src: 'https://www.youtube.com/embed/P9cnQAfhwIM',
                title: 'Back Video 3',
              },
              {
                src: 'https://www.youtube.com/embed/o062bxRT1EA',
                title: 'Back Video 4',
              },
            ],
        ];
        const chest = [
            [
              {
                src: 'https://www.youtube.com/embed/4o1YzksPuqg',
                title: 'chest Video 1',
              },
              {
                src: 'https://www.youtube.com/embed/NsEbXsTwas8',
                title: 'chest Video 2',
              },
            ],
            [
              {
                src: 'https://www.youtube.com/embed/jBhZWX91bec',
                title: 'chest Video 3',
              },
              {
                src: 'https://www.youtube.com/embed/wUOBow4rsSY',
                title: 'chest Video 4',
              },
            ],
        ];
        const legs = [
            [
              {
                src: 'https://www.youtube.com/embed/AQyhNSDXYf0',
                title: 'legs Video 1',
              },
              {
                src: 'https://www.youtube.com/embed/4MOW8mJSR4k',
                title: 'legs Video 2',
              },
            ],
            [
              {
                src: 'https://www.youtube.com/embed/TC8ui7WkOao',
                title: 'legs Video 3',
              },
              {
                src: 'https://www.youtube.com/embed/q7rCeOa_m58',
                title: 'legs Video 4',
              },
            ],
        ];
        const shoulders = [
            [
              {
                src: 'https://www.youtube.com/embed/9pILlZud3iY',
                title: 'shoulders Video 1',
              },
              {
                src: 'https://www.youtube.com/embed/Aq7qermvmXM',
                title: 'shoulders Video 2',
              },
            ],
            [
              {
                src: 'https://www.youtube.com/embed/KBujwXdONwo',
                title: 'shoulders Video 3',
              },
              {
                src: 'https://www.youtube.com/embed/rnDWTXYDMOg',
                title: 'shoulders Video 4',
              },
            ],
        ];
        const arms = [
            [
              {
                src: 'https://www.youtube.com/embed/UY6-JzdnHUM',
                title: 'legs Video 1',
              },
              {
                src: 'https://www.youtube.com/embed/IvmaekQfKiw',
                title: 'legs Video 2',
              },
            ],
            [
              {
                src: 'https://www.youtube.com/embed/bXItN5LESkw',
                title: 'legs Video 3',
              },
              {
                src: 'https://www.youtube.com/embed/9rVxPC6IokA',
                title: 'legs Video 4',
              },
            ],
        ];
        switch (selectedCategory) {
            case 'back':
                return (
                    <YotubeTable videos={back} />
                );
            case 'chest':
                return (
                    <YotubeTable videos={chest} />
                );
            case 'legs':
                return (
                    <YotubeTable videos={legs} />
                );
            case 'arms':
                return (
                    <YotubeTable videos={arms} />
                );
            case 'shoulders':
                return (
                    <YotubeTable videos={shoulders} />
                );
            default:
                return null;
        }
    }
    return (
        <><div>Training videos by muscle group</div><div>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Select a category</option>
                <option value="back">Back</option>
                <option value="chest">Chest</option>
                <option value="legs">Legs</option>
                <option value="arms">Arms</option>
                <option value="shoulders">Shoulders</option>
            </select>

            {getCategoryLinks()}
        </div></>

    )
}

export default YoutubeTrainingsPrograms