import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
     if (error instanceof Error) {
      console.error("Error fetching popular movies:", error.message);
    } else {
      console.error("Error fetching popular movies:", error);
    }
    return [];
  }
};
