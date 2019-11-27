import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'tachyons';
import App from './App';

/*Build my Routes*/
import Routes from './configs/routes';

/*Build my store*/
import {StoreProvider} from './store'



ReactDOM.render(
<StoreProvider>
    <Routes />
</StoreProvider>    
, document.getElementById('root'));
