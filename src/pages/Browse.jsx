import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, nfOriginalsSelector } from '../features/tv/tvSlice';
import { fetchPopularMovies, popularMoviesSelector } from '../features/movie/movieSlice';
import { endpoints } from '../utility/requests';

function Browse(props) {
    const {platform} = useParams();
    const dispatch = useDispatch();
    const [videoList, setVideoList]= useState(null);
    const [randomIndex, setRandomIndex] = useState(null);

    const nfOriginals = useSelector(nfOriginalsSelector);
    const popularMovies = useSelector(popularMoviesSelector);

    useEffect(()=>{
        if(platform === "tv"){
            dispatch(fetchNetflixOriginals());
            setVideoList(nfOriginals);
        }else{
            dispatch(fetchPopularMovies());
            setVideoList(popularMovies);
        }
    }, [nfOriginals, popularMovies])

    useEffect(()=>{
        if (videoList?.status === "success") {
            let randomIndex = Math.floor(
              Math.random() * videoList?.data?.results.length
            );
            setRandomIndex(randomIndex);
          }
    }, [videoList])

    return (
       <>
        <Header video={videoList?.data.results[randomIndex]}/>
       </>
    );
}

export default Browse;