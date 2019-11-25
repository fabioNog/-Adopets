import { createStore } from 'redux';

function reducer(){    
    return [
        {
            id: 1,
            title: "Testando Store",
        }
    ]   
}

const store = createStore(reducer);

export default store

