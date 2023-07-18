import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNetflixOriginals,
  nfOriginalsSelector,
} from "../features/tv/tvSlice";
import Header from "../components/Header";
import Row from "../components/Row";
import { fetchPopularMovies, fetchTopRatedMovies, popularMoviesSelector, topRatedMovieSelector } from "../features/movie/movieSlice";

function HomeScreen(props) {
  const [randomIndex, setRandomIndex] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNetflixOriginals());
  }, []);
  const nfOriginals = useSelector(nfOriginalsSelector);

  useEffect(() => {
    if (nfOriginals.status === "success") {
      let randomIndex = Math.floor(
        Math.random() * nfOriginals.data.results.length
      );
      setRandomIndex(randomIndex);
    }
  }, [nfOriginals]);

  return (
    <>
      {nfOriginals.status === "success" ? (
        <Header video={nfOriginals.data.results[randomIndex]} />
      ) : (
        "loading"
      )}
      <div className="container-fluid py-3">
        <Row title="Popular Movies" action={fetchPopularMovies} selector={popularMoviesSelector} />
        <Row title="Top Rated Movies" action={fetchTopRatedMovies} selector={topRatedMovieSelector}/>
      </div>
    </>
  );
}

export default HomeScreen;
