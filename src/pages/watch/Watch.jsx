import { IoMdArrowBack } from "react-icons/io";
import "./watch.css";

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <IoMdArrowBack />
        Home
      </div>
      <video
        className="video"
        // autoPlay={true}
        progress
        controls
        src="src/assets/video.mp4"
      />
    </div>
  );
}

export default Watch;
