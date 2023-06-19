import React from "react";
import VideoLink from "./VideoLink";
export default function LoadLinks(props) {
  const { video_urls } = props;
  return (
    //Show all video links in table two in a row
    <div className="row shadow-lg">
      {video_urls.map((url, index) => (
        <div key={index} className="col">
          <div className="card h-150">
            <VideoLink src={url} />
            <div className="card-body">
              <h5 className="card-title">Video {index + 1}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
