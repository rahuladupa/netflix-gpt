import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () =>{
const dispatch = useDispatch();
const popularMovies = useSelector(store => store.movies.popularMovies)

const getPopluarmovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS)
  const json = await data.json()
  // console.log(json.results)
  dispatch(addPopularMovies(json.results))
}
useEffect(()=>{
 !popularMovies && getPopluarmovies()
},[])


}
export default usePopularMovies