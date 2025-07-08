import {useEffect} from 'react'
import { useDispatch} from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';
const useMovieTrailer = (movieId) => {
  const dispatch=useDispatch();
    
    const getMovieVideos=async()=>{
        const response=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json=await response.json();
        const filterData=json.results.filter(el=>el.type==='Trailer'&&el.name==="Official Trailer");
        const trailer=filterData.length?filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    
    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useMovieTrailer