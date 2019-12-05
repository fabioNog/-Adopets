import { action } from 'typesafe-actions';
import { UsersTypes, users } from './types';

export const loadRequest = () => action(UsersTypes.LOAD_REQUEST);

export const loadSuccess = (data: users[]) => action(UsersTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(UsersTypes.LOAD_FAILURE);