import { movieDetailStyles } from './movieDetail.styles';
import { MovieDetailProps } from './movieDetail.types';

const HomeView = ({ value }: MovieDetailProps): JSX.Element => {
  return (
    <>
      <p style={movieDetailStyles.textStyle}>{value}</p>
    </>
  );
};

export default HomeView;
