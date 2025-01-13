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
    
  fetchMoviesByName: async (name: string) => {
    const moviesData = await getMoviesByName(name);
    set({ movies: moviesData });
  },

  fetchMovies: async (sortBy: SortBy = ''): Promise<void> => {
    const moviesData = await getMovies(sortBy);
    set({ movies: moviesData });
  },
}));
