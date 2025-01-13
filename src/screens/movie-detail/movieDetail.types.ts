import { Movie } from '@/components/movie-card/movie.types';

export interface MovieDetailProps {
  movie: Movie;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  favoriteButtonColor: string;
  isMobile: boolean;
  isLongSummary: boolean;
  isFavorite: boolean;
  addToFavorites: (movieId: string) => void;
  removeFromFavorites: (movieId: string) => void;
  displayedSummary: string;
}
