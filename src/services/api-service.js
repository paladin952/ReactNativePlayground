

import {API_KEY} from "../utils/constants";
import axios from 'axios';

export function getMostPopular() {
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY);
}

export function getReviews(movieId) {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=` + API_KEY;
    console.log("luci", url);
    return axios.get(url);
}