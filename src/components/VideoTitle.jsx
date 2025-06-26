import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay , faCircleInfo} from '@fortawesome/free-solid-svg-icons';
const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[20%] md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-2xl py-2 mx-2 md:text-6xl text-bold">{title}</h1>
        <p className="hidden md:block py-6 w-4/12 text-lg">{overview}</p>
        <div className='flex md:flex-row'>
            <button className="bg-white text-black py-2 px-6 md:py-4 md:px-12 text-xl rounded-lg mx-2 my-2 md:my-0 hover:bg-opacity-90"><FontAwesomeIcon icon={faPlay} size="lg" /> Play</button>
            <button className="bg-gray-500 text-black py-4 px-12 text-xl  rounded-lg hidden md:block"><FontAwesomeIcon icon={faCircleInfo} size="lg" /> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
