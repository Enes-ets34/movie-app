import { Movie } from '@/components/movie-card/movie.types';

export interface HomeProps {
  value?: string;
  movies: Movie[];
}
