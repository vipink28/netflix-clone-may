import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, nfOriginalsSelector } from '../features/tv/tvSlice';
import Header from '../components/Header';

function HomeScreen(props) {
    const [randomIndex, setRandomIndex]=useState(null);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNetflixOriginals());
    }, [])
    const nfOriginals = useSelector(nfOriginalsSelector);

    useEffect(()=>{
        if(nfOriginals.status === "success"){
            let randomIndex = Math.floor(Math.random() * nfOriginals.data.results.length);
            setRandomIndex(randomIndex);
        }
    }, [nfOriginals])
    




    return (
        <>
            {
                nfOriginals.status === "success" ?
                <Header video={nfOriginals.data.results[randomIndex]}/>
                : "loading"
            }
            
        </>
       
    );
}

export default HomeScreen;