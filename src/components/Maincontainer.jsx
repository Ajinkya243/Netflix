import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const Maincontainer = () => {
    const{nowPlayingMovies}=useSelector(state=>state.movies);
    if(!nowPlayingMovies.length) return;
    const mainMovie=nowPlayingMovies[0];
    const{original_title,id,overview}=mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default Maincontainer