import React, { useEffect, useState } from "react";

function VideoPlayer(props) {

const {videosList} = props;
console.log(videosList);
const [key, setKey]= useState('');

useEffect(()=>{
    if(videosList && videosList.length > 0){
        const trailer = videosList?.find((item)=>{
            return item.type === "Trailer"
       })
       setKey(trailer.key);
    }   
}, [videosList])

  return (
    <div class="ratio ratio-16x9 video-player">
      <iframe
        src={`https://www.youtube.com/embed/${key}?rel=0`}
        title="YouTube video"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
