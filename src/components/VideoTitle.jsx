import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay , faCircleInfo} from '@fortawesome/free-solid-svg-icons';
const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="text-6xl text-bold">{title}</h1>
        <p className="py-6 w-4/12 text-lg">{overview}</p>
        <div>
            <button className="bg-white text-black py-4 px-12 text-xl rounded-lg mx-2 hover:bg-opacity-90"><FontAwesomeIcon icon={faPlay} size="lg" /> Play</button>
            <button className="bg-gray-500 text-black py-4 px-12 text-xl  rounded-lg"><FontAwesomeIcon icon={faCircleInfo} size="lg" /> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
