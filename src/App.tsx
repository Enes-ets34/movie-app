import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Home } from './screens/home/HomeScreen';
import { MovieDetail } from './screens/movie-detail/MovieDetailScreen';
import { Login } from './screens/login/LoginScreen';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { AuthProvider } from './context/auth/auth.context';
import { ProtectedRoute } from './components/protected-route/ProtectedRoute';

const App: React.FC = () => {
  const location = useLocation();

  const getPage = (): 'login' | 'home' | 'film-detail' => {
    if (location.pathname === '/') return 'home';
    if (location.pathname.startsWith('/movie-detail')) return 'film-detail';
    return 'login';
  };

  return (
    <>
      <Header page={getPage()} />
      <div className='container' style={{ paddingTop: 144 }}>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/movie-detail/:id'
            element={
              <ProtectedRoute>
                <MovieDetail />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const WrappedApp: React.FC = () => (
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);

export default WrappedApp;
