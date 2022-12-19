import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { filmDescription, Films } from '../types/film';
import { usersReview, usersReviews } from '../types/usersReviews';
import { addReview, addReviews, changeGenre, loadFilm, loadFilms, loadMyListFilms, loadPromoFilm, loadSimilarFilms, requireAuthorization, setFavoriteFilmsAction, setFilmDataLoadingStatus, setFilmsDataLoadingStatus, setReviewFormDisabled, setReviewsLoadingStatus } from './action';

type InitialState = {
  genre: string;
  filmsList: filmDescription[];
  isFilmsDataLoading: boolean;
  isFilmDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  film: filmDescription;
  review: usersReview;
  reviews: usersReviews;
  isReviewsDataLoading: boolean;
  isReviewFormDisabled: boolean;
  similarFilms: Films;
  promoFilm: filmDescription;
  favouriteList: Films;
  filmStatus: filmDescription | undefined;
};

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  isFilmsDataLoading: false,
  isFilmDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  film: {} as filmDescription,
  reviews: [],
  review: {} as usersReview,
  isReviewsDataLoading: false,
  isReviewFormDisabled: false,
  similarFilms: [],
  promoFilm: {} as filmDescription,
  favouriteList: [],
  filmStatus: undefined,

};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(addReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsDataLoading = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.review = action.payload;
    })
    .addCase(setReviewFormDisabled, (state, action) => {
      state.isReviewFormDisabled = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadMyListFilms, (state, action) => {
      state.favouriteList = action.payload;
    })
    .addCase(setFavoriteFilmsAction, (state, action) => {
      state.favouriteList = action.payload;
    });
});

export {reducer};
