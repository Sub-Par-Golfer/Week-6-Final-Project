import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
    console.error("API_URL is not defined. Make sure it's set in your .env file.");
}

const apiClient = axios.create({
    baseURL: API_URL,
});

export const fetchMovies = async (query, page = 1) => {
    if (!query) {
        console.error("Query parameter is required to fetch movies.");
        return [];
    }

    try {
        const response = await apiClient.get("", {
            params: {
                s: query,
                page,
            },
        });
        return response.data.Search || [];
    } catch (error) {
        console.error("Error fetching movies:", error.message);
        throw error;
    }
};

export const fetchMovieDetails = async (movieId) => {
    if (!movieId) {
        console.error("Movie ID is required to fetch movie details.");
        return null;
    }

    try {
        const response = await apiClient.get("", {
            params: {
                i: movieId,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error.message);
        throw error;
    }
};