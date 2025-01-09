import { homeStyles } from './home.styles';
import { HomeProps } from './home.types';

const HomeView = ({ value }: HomeProps): JSX.Element => {
  return (
    <>
      <p style={homeStyles.textStyle}>{value}</p>
    </>
  );
};

export default HomeView;
