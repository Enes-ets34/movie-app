import { Movie } from '@/components/movie-card/movie.types';

export interface MovieDetailProps {
  movie: Movie;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}
