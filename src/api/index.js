import axios from 'axios';

const API = axios.create({ baseURL: `https://api.tvmaze.com/` }); 

export const getAllShows = async () => await API.get('/search/shows?q=all');
export const getShowDetails = async (id) => await API.get(`/shows/${id}`);