import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { filmDescription, Films } from '../types/film';

export const changeGenre = createAction('film/changeGenre', (value: string) => ({
  payload: value,
}));

export const loadFilms = createAction('film/loadFilms', (value: Films) => ({
  payload: value,
}));

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');


export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadFilm = createAction('film/loadFilm', (film: filmDescription) => ({
  payload: film
}));
