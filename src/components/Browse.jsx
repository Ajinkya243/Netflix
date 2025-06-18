import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header"
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovie();
  useUpcomingMovies();
  return (
    <div className="overflow-hidden relative">
        <Header/>
        <Maincontainer/>
        <Secondarycontainer/>
    </div>
  )
}

export default Browse