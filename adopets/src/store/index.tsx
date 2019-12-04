import {combineReducers, createStore} from 'redux';
import { UsersState } from './ducks/users/types';

export interface APState {
  users: UsersState
}

interface IState{
    reducer: []
}

function reducer(){
    return [
        {
            username: 'teste',
            password: 'testando'
        }        
    ]
}

const store = createStore(reducer);

export default store


