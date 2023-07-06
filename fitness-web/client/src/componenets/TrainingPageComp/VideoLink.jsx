import React from "react";

//This component is used to create a video player from ReactPlayer uses fade-in-down animation
//Used in TrainingPageComp
//SRC is the video url to be played
export default function VideoLink(props) {
  const { src } = props;
  return (
    <div >
      <iframe
        src={src}
        title="YouTube video"
        animation="fade-in-down"
        allowFullScreen
      ></iframe>
    </div>
  );
}
