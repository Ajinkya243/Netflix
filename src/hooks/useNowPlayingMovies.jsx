import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react"
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
  useEffect(()=>{
    const getNowPlaying=async()=>{
      const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json=await response.json();
      dispatch(addNowPlayingMovies(json.results));
    }
    getNowPlaying();
    
  },[]);
}

export default useNowPlayingMovies;