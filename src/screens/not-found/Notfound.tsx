import React from 'react';
import { Link } from 'react-router-dom';
import Text from '@/components/text/Text';
import styles from './notFound.module.scss';

export const NotFound: React.FC = () => {
  return (
    <div className={styles['not-found']}>
      <Text size='9xl'>404</Text>
      <Text size='xl'>Aradığınız sayfa bulunamadı.</Text>
      <Link to='/'>Anasayfaya Dön</Link>
    </div>
  );
};
