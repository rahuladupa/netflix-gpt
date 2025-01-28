import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpComingMovies = () =>{
const dispatch = useDispatch();

const upComingMovies = useSelector(movie => movie.movies.upComingMovies)


const getUpComingMovies = async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS)
  const json = await data.json()
  // console.log(json.results)
  dispatch(addUpComingMovies(json.results))
}
useEffect(()=>{
 !upComingMovies &&  getUpComingMovies()
},[])


}
export default useUpComingMovies