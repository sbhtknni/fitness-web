import React, { useState, useEffect } from 'react';
import NavigationBar from '../componenets/NavigationBar';

export function DropdownForm() {
  const [selectedVideo, setSelectedVideo] = useState('');
  const [videoLinks, setVideoLinks] = useState([]);

  useEffect(() => {
    // Fetch video links from the server or your database
    const fetchVideoLinks = async () => {
      try {
        // Simulating API call to fetch video links
        const response = await fetch('/api/videoLinks');
        const data = await response.json();
        setVideoLinks(data);
      } catch (error) {
        console.error('Error fetching video links:', error);
      }
    };

    fetchVideoLinks();
  }, []);

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.value);
  };

  return (
    <>
      <NavigationBar />
      <div className="container">
        <h3>Select a video:</h3>
        <div className="btn-group shadow-0">
          <button
            type="button"
            className="btn btn-light dropdown-toggle"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedVideo ? selectedVideo : 'Select an option'}
          </button>
          <ul className="dropdown-menu">
            {videoLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setSelectedVideo(link.url)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div id="videoContainer">
          {selectedVideo && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </>
  );
}

export default DropdownForm;
