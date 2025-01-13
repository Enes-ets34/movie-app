import React, { useEffect, useState } from 'react';
import './header.scss';
import { HeaderProps } from './header.types';
import Input from '../input/Input';
import { Icons } from '@/theme/icons';
import Text from '../text/Text';
import { Colors } from '@/theme/colors';
import { useMovieStore } from '@/store/movie/useMovieStore';
import { useDebounce } from '@/hooks/useDebounce';

const Header: React.FC<HeaderProps> = ({ page }) => {
  const [searchKey, setSearchKey] = useState<string>('');
  const { selectedMovie } = useMovieStore();
  const debouncedSearchKey = useDebounce(searchKey, 750);
  const { fetchMovies, fetchMoviesByName, favorites } = useMovieStore();
  useEffect(() => {
    if (debouncedSearchKey.length >= 3) {
      fetchMoviesByName(debouncedSearchKey);
    } else {
      fetchMovies();
    }
  }, [debouncedSearchKey, fetchMoviesByName, fetchMovies]);

  return (
    <header className='header'>
      {page === 'login' ? (
        <h1 className='header__title'>Movies App</h1>
      ) : (
        <div className='container header-wrapper'>
          <div className='header__input'>
            {page === 'film-detail' && selectedMovie ? (
              <h1 className='header__movie__title'>{selectedMovie?.name}</h1>
            ) : (
              <Input
                value={searchKey}
                onChange={e => setSearchKey(e.target.value)}
                type='text'
                size='sm'
                placeholder='Search for movies...'
                icon={Icons.search}
              />
            )}
          </div>
          {favorites && (
            <div className='header__favorites'>
              <Text color={Colors.rose600}>Favoriler</Text>
              <Text bold>{favorites?.length}</Text>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
