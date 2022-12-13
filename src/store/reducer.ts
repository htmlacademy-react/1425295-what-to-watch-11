import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { filmDescription } from '../types/film';
import { usersReview, usersReviews } from '../types/usersReviews';
import { addReview, addReviews, changeGenre, loadFilm, loadFilms, requireAuthorization, setFilmDataLoadingStatus, setFilmsDataLoadingStatus, setReviewsLoadingStatus } from './action';

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
    });
});

export {reducer};
