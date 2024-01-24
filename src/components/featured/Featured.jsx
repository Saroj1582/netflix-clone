import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./featured.css";
function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="genre">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img className="bgImg" src="src/assets/user2.webp" alt="" />

      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste tempore
          voluptatum optio cupiditate voluptatem aperiam ex aliquid veritatis
          accusantium? Ducimus, est iusto. Error repudiandae et adipisci non,
          tempore veritatis totam!
        </span>
        <div className="buttons">
          <button className="playBtn">
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="infoBtn">
            <IoMdInformationCircleOutline className="infoIcon" />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
