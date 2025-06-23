import { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovie } from '../utils/gptSlice';

const GptSearchBar = () => {
    const{language}=useSelector(state=>state.config);
    const searchText=useRef();
    const dispatch=useDispatch();
    
    const searchMovieTMDB=async(e)=>{
      e.preventDefault();
      const data =await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1'`,API_OPTIONS);
      const response=await data.json();
      const movies=response.results;
      dispatch(addGptMovie(movies));
    }
  return (
    <div className='flex justify-center'>
    <form className="pt-[10%] grid grid-cols-12 gap-2 w-full max-w-2xl mx-auto px-4">
  <input
    type="text"
    className="p-4 col-span-9 sm:col-span-10 border rounded-lg"
    placeholder={lang[language].gptSearchPlaceHolder}
    ref={searchText}
  />
  <button className="py-2 px-4 rounded-lg bg-red-700 text-white col-span-3 sm:col-span-2" onClick={searchMovieTMDB}>
    {lang[language].search}
  </button>
</form>

    </div>
  )
}

export default GptSearchBar