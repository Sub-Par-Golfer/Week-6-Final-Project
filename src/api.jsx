import axios from 'axios';

// Base URL from environment variables
const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
    console.error("API_URL is not defined. Make sure it's set in your .env file.");
}

// Axios instance for reusable configurations
const apiClient = axios.create({
    baseURL: API_URL, // Base URL already includes the API key
});

// Fetch movies based on a search query
export const fetchMovies = async (query, page = 1) => {
    if (!query) {
        console.error("Query parameter is required to fetch movies.");
        return [];
    }

    try {
        const response = await apiClient.get("", {
            params: {
                s: query, // Search by title
                page, // Pagination
            },
        });
        return response.data.Search || []; // Return the "Search" array
    } catch (error) {
        console.error("Error fetching movies:", error.message);
        throw error;
    }
};

// Fetch details for a specific movie by IMDb ID
export const fetchMovieDetails = async (movieId) => {
    if (!movieId) {
        console.error("Movie ID is required to fetch movie details.");
        return null;
    }

    try {
        const response = await apiClient.get("", {
            params: {
                i: movieId, // Search by IMDb ID
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error.message);
        throw error;
    }
};