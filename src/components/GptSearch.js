import { BANNER_IMG } from "../utils/constants"
import GptMoviesSuggestions from "./GptMoviesSuggestions"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <>
        <div className="fixed   -z-10">
        <img
          className="h-screen w-screen object-cover brightness-50"
          src={BANNER_IMG}
          alt="netflix_banner"
        />
      </div>
    <div className="">
    <GptSearchBar />
    <GptMoviesSuggestions />
    </div>
    </>
  )
}

export default GptSearch
