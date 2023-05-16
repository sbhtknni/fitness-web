import React, { useState } from 'react'

const YoutubeTrainingsPrograms = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const getCategoryLinks = () => {
        switch (selectedCategory) {
            case 'back':
                return (
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <iframe
                                            width="500"
                                            height="300"
                                            src="https://www.youtube.com/embed/EMKrh3naOBg"
                                            title="Back Video 1"
                                            allowFullScreen
                                        ></iframe>
                                    </td>
                                    <td>
                                        <iframe
                                            width="500"
                                            height="300"
                                            src="https://www.youtube.com/embed/YvKOvyiAdAI"
                                            title="Back Video 2"
                                            allowFullScreen
                                        ></iframe>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <iframe
                                            width="500"
                                            height="300"
                                            src="https://www.youtube.com/embed/P9cnQAfhwIM"
                                            title="Back Video 3"
                                            allowFullScreen
                                        ></iframe>
                                    </td>
                                    <td>
                                        <iframe
                                            width="500"
                                            height="300"
                                            src="https://www.youtube.com/embed/o062bxRT1EA"
                                            title="Back Video 4"
                                            allowFullScreen
                                        ></iframe>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case 'chest':
                return (
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <iframe
                                            width="500"
                                            height="300"
                                            src="https://www.youtube.com/embed/4o1YzksPuqg"
                                            title="Chest Video 1"
                                            allowFullScreen
                                        ></iframe>
                                    </td>
                                    <td>
                                        <iframe
                                            width="500"
                                            height="300"
                                            src="https://www.youtube.com/embed/NsEbXsTwas8"
                                            title="Chest Video 2"
                                            allowFullScreen
                                        ></iframe>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <iframe
                                            width="500"
                                            height="300"
                                            src="https://www.youtube.com/embed/jBhZWX91bec"
                                            title="Chest Video 3"
                                            allowFullScreen
                                        ></iframe>
                                    </td>
                                    <td>
                                        <iframe
                                            width="500"
                                            height="300"
                                            src="https://www.youtube.com/embed/wUOBow4rsSY"
                                            title="Chest Video 4"
                                            allowFullScreen
                                        ></iframe>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case 'legs':
                return (
                    <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/AQyhNSDXYf0"
                                        title="legs Video 1"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/4MOW8mJSR4k"
                                        title="legs Video 2"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/TC8ui7WkOao"
                                        title="legs Video 3"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/q7rCeOa_m58"
                                        title="legs Video 4"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                );
            case 'arms':
                return (
                    <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/UY6-JzdnHUM"
                                        title="arms Video 1"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/kiI57DPH3fM"
                                        title="arms Video 2"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/bXItN5LESkw"
                                        title="arms Video 3"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/9rVxPC6IokA"
                                        title="arms Video 4"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                );
            case 'shoulders':
                return (
                    <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/9pILlZud3iY"
                                        title="shoulders Video 1"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/Aq7qermvmXM"
                                        title="shoulders Video 2"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/KBujwXdONwo"
                                        title="shoulders Video 3"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                                <td>
                                    <iframe
                                        width="500"
                                        height="300"
                                        src="https://www.youtube.com/embed/rnDWTXYDMOg"
                                        title="shoulders Video 4"
                                        allowFullScreen
                                    ></iframe>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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