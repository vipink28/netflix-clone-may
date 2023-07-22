import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNetflixOriginals,
  nfOriginalsSelector,
} from "../features/tv/tvSlice";
import Header from "../components/Header";
import Row from "../components/Row";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  popularMoviesSelector,
  topRatedMovieSelector,
} from "../features/movie/movieSlice";

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
      {nfOriginals.status === "loading" ? (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="spinner-border text-white" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : nfOriginals.status === "success" ? (
        <Header video={nfOriginals.data.results[randomIndex]} platform="tv"/>
      ) : (
        "error"
      )}
      <div className="container-fluid py-3">
        <Row
          title="Popular Movies"
          action={fetchPopularMovies}
          selector={popularMoviesSelector}
          platform="movie"
        />
        <Row
          title="Top Rated Movies"
          action={fetchTopRatedMovies}
          selector={topRatedMovieSelector}
          platform="movie"
        />
      </div>
    </>
  );
}

export default HomeScreen;
