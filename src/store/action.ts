// На данном этапе нам потребуется несколько действий:
// 1) изменение жанра и
// 2) получение списка фильмов в соответствии с выбранным жанром.
// Действие для заполнения списка фильмов должно поместить в хранилище все фильмы.
// Пока используем тестовые данные.

import {createAction} from '@reduxjs/toolkit';
import { filmDescription } from '../types/film';

export const changeGenre = createAction('film/changeGenre', (value: string) => ({
  payload: value,
}));
export const getFilmsList = createAction('film/getFilmsList', (value: filmDescription[]) => ({
  payload: value,
}));

