import { useParams } from 'react-router-dom';
import { Movie } from '@/components/movie-card/movie.types';
import MovieDetailView from './MovieDetailView';
import { useEffect, useState } from 'react';
import { getMovieById } from '@/services/movieService';
import { useMovieStore } from '@/store/movie/useMovieStore';

export function MovieDetail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | undefined>();
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    setSelectedMovie,
  } = useMovieStore();

  const isFavorite = favorites.includes(movie?.id || '');

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

  if (!movie) return <p>Loading...</p>;

  return (
    <MovieDetailView
      movie={movie}
      isFavorite={isFavorite}
      onFavoriteToggle={handleFavoriteToggle}
    />
  );
}
