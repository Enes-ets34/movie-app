import { Movie } from '@/components/movie-card/movie.types';
import { SortBy } from '@/types/types';
import httpRequest from '@api/httpRequest';

export const getMovies = async (sortBy: SortBy): Promise<Movie[]> => {
  try {
    const response = await httpRequest.get(
      `/movies?_sort=${sortBy ? sortBy : ''}`
    );
    const data: Movie[] = await response.data;

    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const getMovieById = async (id: string): Promise<Movie> => {
  const response = await httpRequest.get(`/movies/${id}`);
  return response.data;
};
export const getMoviesByName = async (name: string): Promise<Movie[]> => {
  try {
    const response = await httpRequest.get(`/movies/?name_like=${name}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies by name:', error);
    throw error;
  }
};
