import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header"
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovies();
  const {showGptSearch}=useSelector(state=>state.gpt)
  return (
    <div className="overflow-hidden relative">
        <Header/>
       
        {showGptSearch ?<GptSearch/>:
        <>
        <Maincontainer/>
        <Secondarycontainer/>
        </>}
    </div>
  )
}

export default Browse