import React from "react";
import { truncateText } from "../utility/utils";

function Header(props) {
  const { video } = props;
  console.log(video);
  return (
    <div className="position-relative">
      <img
        className="w-100"
        src={`https://image.tmdb.org/t/p/original${video?.backdrop_path}`}
        alt=""
      />
      <div className="caption text-white">
        <h1 className="display-2 title mb-0">{video?.name || video?.title || video?.original_title || video?.original_name}</h1>        
        <p className="fs-4">{truncateText(video?.overview, 150)}</p>
      </div>
      <div className="header-vignette"></div>
      <div className="header-bottom-vignette"></div>
    </div>
  );
}

export default Header;
