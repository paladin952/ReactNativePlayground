

import {API_KEY} from "../utils/constants";
import axios from 'axios';

axios.defaults.baseURL = 'https://api.example.com';

export function getMostPopular() {
    return axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY);
};