import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '@/components/movie-card/movie.types';
import MovieDetailView from './MovieDetailView';
import { getMovieById } from '@/services/movieService';
import { useMovieStore } from '@/store/movie/useMovieStore';
import { Colors } from '@/theme/colors';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useLoadingStore } from '@/store/loading/loadingStore';

function MovieDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | undefined>();
  const [isExpanded, setIsExpanded] = useState(false);
  const { favorites, addToFavorites, removeFromFavorites, setSelectedMovie } =
    useMovieStore();
  const isMobile = useIsMobile();
  const isFavorite = favorites.includes(movie?.id || '');
  const favoriteButtonColor = isFavorite ? Colors.red400 : Colors.gray300;
  const { setLoading } = useLoadingStore();

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const movieData = await getMovieById(id);
        setMovie(movieData);
        setSelectedMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();

    return () => {
      setSelectedMovie(null);
    };
  }, [id, setSelectedMovie, setLoading]);

  const isLongSummary = movie ? movie.summary.length > 250 : false;
  const displayedSummary = isExpanded
    ? movie?.summary
    : `${movie?.summary.slice(0, 250)}...`;

  if (!movie) return <></>;

  return (
    <MovieDetailView
      isFavorite={isFavorite}
      isLongSummary={isLongSummary}
      displayedSummary={displayedSummary || ''}
      movie={movie}
      isMobile={isMobile}
      addToFavorites={addToFavorites}
      removeFromFavorites={removeFromFavorites}
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      favoriteButtonColor={favoriteButtonColor}
    />
  );
}
export default MovieDetail;
