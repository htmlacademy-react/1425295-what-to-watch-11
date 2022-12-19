import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { filmDescription, Films } from '../types/film';
import { usersReview, usersReviews } from '../types/usersReviews';

export const changeGenre = createAction('film/changeGenre', (value: string) => ({
  payload: value,
}));

export const loadFilms = createAction('film/loadFilms', (value: Films) => ({
  payload: value,
}));

export const loadMyListFilms = createAction('film/loadMyListFilms', (value: Films) => ({
  payload: value,
}));

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');


export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadFilm = createAction('film/loadFilm', (film: filmDescription) => ({
  payload: film
}));

export const addReviews = createAction('reviews/addReviews', (value: usersReviews) => ({
  payload: value,
}));

export const addReview = createAction('review/addReview', (value: usersReview) => ({
  payload: value,
}));

export const setReviewsLoadingStatus = createAction<boolean>('reviews/setReviewsLoadingStatus');

export const setReviewLoadingStatus = createAction<boolean>('reviews/setReviewLoadingStatus');

export const setReviewFormDisabled = createAction<boolean>('form/setReviewFormDisabled');

export const loadSimilarFilms = createAction<Films>('film/loadSimilarFilms');

export const loadPromoFilm = createAction<filmDescription>('film/loadPromoFilm');

export const setFavoriteFilmsAction = createAction<Films>('data/setMyListFilmStatus');
