import React from 'react';
import VideoPlayer from "./VideoPlayer";
import VideoInfo from "./VideoInfo";


const Content = () => {
  return (
    <div className="flex flex-col gap-5">
      <VideoPlayer/>
      <VideoInfo />
    </div>
  );
};

export default Content;