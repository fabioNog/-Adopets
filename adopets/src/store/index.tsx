import {combineReducers, createStore} from 'redux';

interface IState{
    reducer: []
}

function reducer(){
    return [
        {
            username: 'teste',
            passwor: 'testando'
        }        
    ]
}

const store = createStore(reducer);
export default store


