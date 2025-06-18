import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react"

const useUpcomingMovies = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    const getUpComings=async()=>{
      const response=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json=await response.json();
      console.log('upcoming',json.results)
      dispatch(addUpcomingMovies(json.results));
    }
    getUpComings();
  },[]);
}

export default useUpcomingMovies