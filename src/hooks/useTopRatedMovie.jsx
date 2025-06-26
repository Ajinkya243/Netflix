import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react"

const useTopRatedMovie = () => {
    const dispatch=useDispatch();
    const{topRatedMovies}=useSelector(state=>state.movies);
  useEffect(()=>{
    const getTopRated=async()=>{
      const response=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      const json=await response.json();
      dispatch(addTopRatedMovies(json.results));
    }
    if(!topRatedMovies.length){
      getTopRated();
    }
  },[]);
}

export default useTopRatedMovie