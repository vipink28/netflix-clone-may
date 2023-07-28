import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Card  from "./Card";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';



function Row(props) {
    const { title, selector, action, platform } = props;
    const dispatch = useDispatch();
    const popular = useSelector(selector);
    useEffect(()=>{
      dispatch(action());
    }, [])

    // if(genre){
    //   axios.get(`${platform}?with_genres=${genre.name}`)
    // }

    return (
      <div className="py-3 video-row text-white">
        <h3 className='mb-2'>{title}</h3>
        <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={5}
      >
        {
          popular?.status === "success" ?
          popular.data.results.map((item)=>{
            return(
              <SwiperSlide key={item.id}>
                <Card video={item} platform={platform}/>
              </SwiperSlide>
            )
          }): ""
        }       
      </Swiper>
      </div>
    );
}

export default Row;