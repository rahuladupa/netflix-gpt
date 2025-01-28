import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () =>{
const dispatch = useDispatch();

const now_playing = useSelector(store => store.movies.nowPlayingMovies)

const getNowPlayingmovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS)
  const json = await data.json()
  // console.log(json.results)
  dispatch(addNowPlayingMovies(json.results))
}
useEffect(()=>{
  !now_playing && getNowPlayingmovies()
},[])


}
export default useNowPlayingMovies