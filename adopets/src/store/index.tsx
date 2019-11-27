import React, {createContext} from 'react';
import { createStore } from 'redux';

interface IState {
    username: string;
    password: string;
}

const initialState:IState = {
    username: '',
    password: ''
}

export const Store = createContext<IState>(initialState)

function reducer(){

}

export function StoreProvider(props: any) :JSX.Element{
    return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}



