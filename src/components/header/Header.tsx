import React from 'react';
import './header.scss';
import { HeaderProps } from './header.types';
import Input from '../input/Input';
import { Icons } from '@/theme/icons';
import Text from '../text/Text';
import { Colors } from '@/theme/colors';

const Header: React.FC<HeaderProps> = ({ page }) => {
  return (
    <header className='header'>
      {page === 'login' && <h1 className='header__title'>Movies App</h1>}

      {page === 'home' && (
        <div className='container header-wrapper'>
          <div className='header__input'>
            <Input
              type='text'
              size='sm'
              placeholder='search for movies..'
              icon={Icons.search}
            />
          </div>
          <div className='header__favorites'>
            <Text color={Colors.rose600}>Favorites</Text>
            <Text bold>6</Text>

          </div>
        </div>
      )}

      {page === 'film-detail' && (
        <>
          <h1 className='header__title'>Film Name</h1>
          <div className='header__favorites'>Favorites</div>
        </>
      )}
    </header>
  );
};

export default Header;
