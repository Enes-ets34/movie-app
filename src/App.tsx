import './index.css';
import { Colors } from './theme/colors';
import Icon from './components/icon/Icon';
import { Icons } from './theme/icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './screens/home/HomeScreen';
import { MovieDetail } from './screens/movie-detail/MovieDetailScreen';

function App() {
  return (
    <Router>
      <div>
        <Icon
          color={Colors.indigo400}
          source={Icons.mail}
          size={{ width: 24, height: 24 }}
        />
        <p>header</p>
      </div>
      <div className='container' style={{ paddingTop: 144 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie-detail/:id' element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
