export interface FavoriteButtonProps {
  movieId: string;
  isFavorite: boolean;
  favoriteButtonColor: string;
  addToFavorites: (id: string) => void;
  removeFromFavorites: (id: string) => void;
  position: { top: string; right: string };
}
