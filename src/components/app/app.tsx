import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AddReview from '../../pages/add-review/add-review';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Player from '../../pages/player/player';
import Registration from '../../pages/registration/registration';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import { promoFilmProps } from '../../types/promo-film';
import PrivateRoute from '../private-route/private-route';

function App({promoFilm}: {promoFilm: promoFilmProps}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreen promoFilm={promoFilm}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Registration/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage/>}
        />
        <Route
          path={AppRoute.Review}
          element={<AddReview/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
