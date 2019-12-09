import { action } from 'typesafe-actions';
import { UsersTypes, user } from './types';

export const loadRequest = () => action(UsersTypes.LOAD_REQUEST);

export const loadSuccess = (data: user[]) => action(UsersTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(UsersTypes.LOAD_FAILURE);