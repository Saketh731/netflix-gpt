import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="cursor-pointer">
      <img
        className="max-w-none w-52 pr-4"
        alt="movie card"
        src={IMG_CDN + posterpath}
      />
    </div>
  );
};

export default MovieCard;
