import React from 'react';
function YotubeTable({ videos }) {
  return (
    <div>
      <table>
        <tbody>
          {videos.map((videoRow, rowIndex) => (
            <tr key={rowIndex}>
              {videoRow.map((video, columnIndex) => (
                <td key={columnIndex}>
                  <iframe
                    width="500"
                    height="300"
                    src={video.src}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default YotubeTable;
