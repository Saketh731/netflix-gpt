import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mt-4 md:mt-0 pt-[20%] p-6 md:px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="mt-2 md:mt-0">
        <button className="bg-white font-bold text-black text-xs md:text-lg p-2 md:p-4 px-5 md:px-12 rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-xs md:text-lg font-bold bg-opacity-50 mx-2 text-white p-2 md:p-4 px-5 md:px-12 rounded-lg hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
