

import {useSelector} from 'react-redux';
import useMovieTrailer from '../utils/useMovieTrailer';


const VideoBackground = ({movieId}) => {
   const{trailerId}=useSelector(state=>state.movies); 
   useMovieTrailer(movieId);
  return (
    <div>
        <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/UWMzKXsY9A4?si=${trailerId?.key}?&autoplay=1&mute=1&loop=1&playlist=${trailerId?.key}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground