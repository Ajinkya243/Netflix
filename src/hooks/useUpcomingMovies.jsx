import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react"

const useUpcomingMovies = () => {
  const dispatch=useDispatch();
  const{upComingMovies}=useSelector(state=>state.movies);
  useEffect(()=>{
    const getUpComings=async()=>{
      const response=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json=await response.json();
      dispatch(addUpcomingMovies(json.results));
    }
    if(!upComingMovies.length){
    getUpComings();
    } 
  },[]);
}

export default useUpcomingMovies