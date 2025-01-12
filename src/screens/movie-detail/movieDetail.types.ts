import { Movie } from '@/components/movie-card/movie.types';

export interface MovieDetailProps {
  movie: Movie;
  onFavoriteToggle: () => void;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  favoriteButtonColor: string;
  isMobile: boolean;
  isLongSummary: boolean;
  displayedSummary: string;
}
