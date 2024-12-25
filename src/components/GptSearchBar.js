import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMoviesInTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the" +
      searchText?.current?.value +
      " .Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (gptResults?.choices?.[0]?.message?.content) {
      const gptMovies = gptResults?.choices?.[0]?.message?.content?.split(",");
      const promiseArray = gptMovies?.map((movie) => searchMoviesInTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    }
  };

  return (
    <div className="pt-[10%] bg-gradient-to-b from-black flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
