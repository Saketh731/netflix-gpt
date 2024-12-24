import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white font-bold text-black text-lg p-4 px-12 rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 font-bold bg-opacity-50 mx-2 text-white text-lg p-4 px-12 rounded-lg hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
