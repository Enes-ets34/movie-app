import { filmDetailStyles } from './filmDetail.styles';
import { FilmDetailProps } from './filmDetail.types';

const HomeView = ({ value }: FilmDetailProps): JSX.Element => {
  return (
    <>
      <p style={filmDetailStyles.textStyle}>{value}</p>
    </>
  );
};

export default HomeView;
