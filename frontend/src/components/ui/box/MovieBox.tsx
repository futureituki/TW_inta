import React from 'react';

type MovieBoxProps = {
  videoSrc: string;
}

export const MovieBox: React.FC<MovieBoxProps> = ({ videoSrc }) => {
  return (
    <div>
      <video controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}