import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '@/components/movie-card/movie.types';
import MovieDetailView from './MovieDetailView';
import { getMovieById } from '@/services/movieService';
import { useMovieStore } from '@/store/movie/useMovieStore';
import { Colors } from '@/theme/colors';
import { useIsMobile } from '@/hooks/useIsMobile';

export function MovieDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | undefined>();
  const [isExpanded, setIsExpanded] = useState(false);
  const { favorites, addToFavorites, removeFromFavorites, setSelectedMovie } =
    useMovieStore();
  const isMobile = useIsMobile();
  const isFavorite = favorites.includes(movie?.id || '');
  const favoriteButtonColor = isFavorite ? Colors.red400 : Colors.gray300;

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;
      try {
        const movieData = await getMovieById(id);
        setMovie(movieData);
        setSelectedMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();

    return () => {
      setSelectedMovie(null);
    };
  }, [id, setSelectedMovie]);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(movie?.id || '');
    } else {
      addToFavorites(movie?.id || '');
    }
  };
  const isLongSummary = movie ? movie.summary.length > 250 : false;
  const displayedSummary = isExpanded
    ? movie?.summary
    : `${movie?.summary.slice(0, 250)}...`;

  if (!movie) return <p>Loading...</p>;

  return (
    <MovieDetailView
      isLongSummary={isLongSummary}
      displayedSummary={displayedSummary || ''}
      movie={movie}
      isMobile={isMobile}
      onFavoriteToggle={handleFavoriteToggle}
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      favoriteButtonColor={favoriteButtonColor}
    />
  );
}
