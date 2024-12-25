import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="cursor-pointer">
      <img
        className="w-36 max-w-none md:w-48 pr-4"
        alt="movie card"
        src={IMG_CDN + posterpath}
      />
    </div>
  );
};

export default MovieCard;
