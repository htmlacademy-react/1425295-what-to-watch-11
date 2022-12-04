import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AddReview from '../../pages/add-review/add-review';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Player from '../../pages/player/player';
import Registration from '../../pages/registration/registration';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import { filmDescription } from '../../types/film';
import { promoFilmProps } from '../../types/promo-film';
import { usersReviews } from '../../types/usersReviews';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
   promoFilm: promoFilmProps;
   films: filmDescription[];
  reviews: usersReviews[];
}

function App({promoFilm, films, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<WelcomeScreen promoFilm={promoFilm} films={films}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Registration/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage films={films}/>}
        />
        <Route
          path={AppRoute.Review}
          element={<AddReview reviews={reviews}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={films}/>}
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
