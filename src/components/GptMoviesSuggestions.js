import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      {movieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMoviesSuggestions;
