import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black text-white">
      <div className="relative pl-3 md:pl-12 mt-0 md:-mt-52 z-10">
        <MovieList
          title={"Now Playing movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Upcoming movies"} movies={movies?.upcomingMovies} />
        <MovieList title={"Popular movies"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated movies"} movies={movies?.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
