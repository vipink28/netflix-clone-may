const API_KEY = '0d8ab7cff2692bd014bb25fca16d7158';

export const requests = {
    getNfOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    getPopularMovies: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
}
