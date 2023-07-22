const API_KEY = '0d8ab7cff2692bd014bb25fca16d7158';

export const requests = {
    getNfOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    getMovies: (endpoint)=>`movie/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getTv: (endpoint)=>`tv/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getVideoDetails: (type)=>`${type.platform}/${type.id}?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`

}


export const endpoints = {
    popular: 'popular',
    topRated: 'top_rated',
    upcoming: 'upcoming',
    nowPlaying: 'now_playing',
    airingToday: 'airing_today',
    onTheAir: 'on_the_air'
}