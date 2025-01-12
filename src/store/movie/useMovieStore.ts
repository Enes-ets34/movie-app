import { create } from 'zustand';
import { Movie } from '@/components/movie-card/movie.types';
import { getMovies, getMoviesByName } from '@/services/movieService';
import { SortBy } from '@/types/types';

interface MovieStore {
  movies: Movie[];
  selectedMovie: Movie | null;
  favorites: string[];
  addToFavorites: (movieId: string) => void;
  removeFromFavorites: (movieId: string) => void;
  setMovies: (movies: Movie[]) => void;
  setSelectedMovie: (movie: Movie | null) => void;
  fetchMoviesByName: (name: string) => Promise<void>;
  fetchMovies: (sortBy?: SortBy) => Promise<void>;
}

export const useMovieStore = create<MovieStore>(set => ({
  movies: [],
  selectedMovie: null,
  favorites: [],
  setSelectedMovie: (movie: Movie | null) => set({ selectedMovie: movie }),
  setMovies: (movies: Movie[]) => set({ movies }),
  fetchMoviesByName: async (name: string) => {
    try {
      const moviesData = await getMoviesByName(name);
      set({ movies: moviesData });
    } catch (error) {
      console.error('Error fetching movies by name:', error);
    }
  },

  fetchMovies: async (sortBy: SortBy = '') => {
    try {
      const moviesData = await getMovies(sortBy);
      set({ movies: moviesData });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  },

  addToFavorites: (movieId: string) =>
    set(state => ({
      favorites: state.favorites.includes(movieId)
        ? state.favorites
        : [...state.favorites, movieId],
    })),

  removeFromFavorites: (movieId: string) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== movieId),
    })),
}));
