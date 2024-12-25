import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  // const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  const getMovieVidoes = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredTrailers = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredTrailers?.length
      ? filteredTrailers[0]
      : json?.results?.[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVidoes();
  }, []);
  return trailerVideo;
};

export default useTrailerVideo;
