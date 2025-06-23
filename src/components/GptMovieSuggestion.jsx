
import { useSelector,useDispatch } from 'react-redux'
import MovieList from './MovieList';
import { clearMovies } from '../utils/gptSlice';
import { useEffect } from 'react';
import lang from '../utils/languageConstants';

const GptMovieSuggestion = () => {
    const{movieResult}=useSelector(state=>state.gpt); 
    const{language}=useSelector(state=>state.config);
    const dispatch=useDispatch();
  useEffect(()=>{
    return()=>dispatch(clearMovies());
  },[])
  if(!movieResult.length) return;
  return (
    <div className='p-4 m-4 bg-black text-white'>
        <MovieList className="opacity-100" title={lang[language].text}  movies={movieResult}/>
        </div>
  )
}

export default GptMovieSuggestion