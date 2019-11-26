import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'tachyons';
import App from './App';

/*Build my Routes*/
import Routes from './configs/routes';

/*Build my store*/
import { Provider } from 'react-redux';
import store from './store';



ReactDOM.render(
<Provider store={store}>
    <Routes />
</Provider>
, document.getElementById('root'));
