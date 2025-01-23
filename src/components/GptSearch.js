import { BANNER_IMG } from "../utils/constants"
import GptMoviesSuggestions from "./GptMoviesSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
        <div className="absolute  bg-opacity-80 -z-10">
        <img
          className=" brightness-50"
          src={BANNER_IMG}
          alt="netflix_banner"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  )
}

export default GptSearch
