import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-2 md:p-6">
      <div className="text-base md:text-2xl font-normal md:font-bold pb-2 md:pb-5">
        {title}
      </div>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterpath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
