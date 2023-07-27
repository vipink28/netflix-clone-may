import React, { useEffect, useState } from "react";
import { truncateText } from "../utility/utils";
import Ratings from "./Ratings";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeaderDetails, headerVideoSelector } from "../features/common/commonSlice";
import Genre from "./Genre";
import VideoPlayer from './VideoPlayer';

function Header(props) {
  const { video, platform } = props;
  const dispatch = useDispatch();
  const {data} = useSelector(headerVideoSelector);
  
  const [isTrailer, setIsTrailer]=useState(false);
  useEffect(()=>{
    if(video){
      dispatch(fetchHeaderDetails({platform: platform, id: video.id}))
    }    
  }, [video])

  const showTrailer=()=>{
    setIsTrailer(true);
  }

  return (
    <div className="position-relative">
      { isTrailer ? 
      <VideoPlayer videosList={data?.videos.results}/>
      :
      <>
      <img
        className="w-100"
        src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        alt=""
      />
      <div className="caption text-white">
        <h1 className="display-2 title mb-0">{data?.name || data?.title || data?.original_title || data?.original_name}</h1> 
        <h3 className="tagline text-warning fst-italic">{data?.tagline}</h3>
        <p className="fs-4">{truncateText(data?.overview, 150)}</p>
        <div className="d-flex mb-3">
        {
          data?.genres.map((item)=>(
            <Genre key={item.id} genre={item}/>
          ))
        }
        </div>
        <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count}/>
        <button onClick={showTrailer}>Play</button>
      </div>
      </>
      }
      <div className="header-vignette"></div>
      <div className="header-bottom-vignette"></div>
    </div>
  );
}

export default Header;
