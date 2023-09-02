import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchNetflixOriginals, nfOriginalsSelector } from '../features/tv/tvSlice';
import { fetchPopularMovies, fetchTopRatedMovies, popularMoviesSelector, topRatedMovieSelector } from '../features/movie/movieSlice';
import Row from '../components/Row';
import axios from '../utility/axios';
import { requests } from '../utility/requests';
import { shuffle } from '../utility/utils';


function Browse(props) {
    const {platform} = useParams();
    const dispatch = useDispatch();
    const [videoList, setVideoList]= useState(null);
    const nfOriginals = useSelector(nfOriginalsSelector);
    const popular = useSelector(popularMoviesSelector);
    const [genreList, setGenreList]=useState(null);
    
    const getGenreList=async()=>{
        const response = await axios.get(requests.getGenres(platform));
        let gen = shuffle(response.data.genres);
        setGenreList(gen);
    }

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

    useEffect(()=>{
        getGenreList();
    }, [platform])


    const randomNumber = Math.floor(Math.random() * videoList?.length);

    return (
       <>
        <Header video={videoList ? videoList[randomNumber]: ""} platform={platform}/>
        
        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[0]: null } platform={platform}/>

        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[1]: null } platform={platform}/>

        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[2]: null } platform={platform}/>

        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[3]: null } platform={platform}/>

        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[4]: null } platform={platform}/>

        <Row selector={popularMoviesSelector} isGenreRow={true} genre={genreList ? genreList[5]: null } platform={platform}/>
       </>

        




    );
}

export default Browse;