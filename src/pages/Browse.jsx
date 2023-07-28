import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchNetflixOriginals, nfOriginalsSelector } from '../features/tv/tvSlice';
import { fetchPopularMovies, fetchTopRatedMovies, popularMoviesSelector, topRatedMovieSelector } from '../features/movie/movieSlice';
import Row from '../components/Row';
import axios from 'axios';
import { requests } from '../utility/requests';


function Browse(props) {
    const {platform} = useParams();
    const dispatch = useDispatch();
    const [videoList, setVideoList]= useState(null);
    const nfOriginals = useSelector(nfOriginalsSelector);
    const popular = useSelector(popularMoviesSelector);

    useEffect(()=>{
        axios.get(requests.getGenres(platform))
    }, [])

    useEffect(()=>{
        if(platform === "tv"){
            dispatch(fetchNetflixOriginals());
        }else{
            dispatch(fetchPopularMovies());
        }
    }, [platform])

    useEffect(()=>{
        if(platform === "tv"){
            setVideoList(nfOriginals.data?.results)
        }else{
            setVideoList(popular.data?.results)
        }
    }, [platform, nfOriginals, popular])

    const randomNumber = Math.floor(Math.random() * videoList?.length);

    return (
       <>
        <Header video={videoList ? videoList[randomNumber]: ""} platform={platform}/>

        <Row title="Top Rated Movies" action={fetchTopRatedMovies}
          selector={topRatedMovieSelector} platform={platform} genre=[genre[0]]/>
       </>
    );
}

export default Browse;