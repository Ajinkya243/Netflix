import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react"


const usePopularMovies = () => {
 const dispatch=useDispatch();
  useEffect(()=>{
    const getPopular=async()=>{
      const response=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
      const json=await response.json();
      dispatch(addPopularMovies(json.results));
    }
    getPopular();
    
  },[]);
}

export default usePopularMovies