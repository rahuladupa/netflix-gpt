import { useDispatch, useSelector } from "react-redux";
import { language } from "../utils/languageConstants";
import { useEffect, useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const selectLang = useSelector((store) => store.config.language);
  // console.log(selectLang)

  const searchMovieTMDB = async (movieName) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          encodeURIComponent(movieName) +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(`Results for "${movieName}":`, json.results);
      return json.results; // Return the results
    } catch (error) {
      console.error(`Error fetching data for "${movieName}":`, error);
      return null; // Return null in case of error
    }
  };
  const handleGptSearchClick = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          encodeURIComponent(searchText.current.value) +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      const movieArray = json.results.map((movie) => movie.title);
  
      const promiseArray = movieArray.map((movie) => searchMovieTMDB(movie));
      // console.log("PromiseArray", promiseArray)
      const tmdbResults = await Promise.all(promiseArray);
  const gptMovies = tmdbResults.map(movie => movie[0]?.title)
      console.log("All TMDB Results:", tmdbResults);
      dispatch(addGptMovieResults({movieNames : gptMovies , movieResults : tmdbResults}));
    } catch (error) {
      console.error("Error during GPT search:", error);
    }
  };
  return (
    <div className="pt-[40%]  md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-black  md:w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={language[selectLang].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3"
        >
          {" "}
          {language[selectLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
