// На данном этапе нам потребуется несколько действий:
// 1) изменение жанра и
// 2) получение списка фильмов в соответствии с выбранным жанром.
// Действие для заполнения списка фильмов должно поместить в хранилище все фильмы.
// Пока используем тестовые данные.

import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Films } from '../types/film';

export const changeGenre = createAction('film/changeGenre', (value: string) => ({
  payload: value,
}));

export const loadFilms = createAction('film/loadFilms', (value: Films) => ({
  payload: value,
}));

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('film/setError');


