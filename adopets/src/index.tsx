import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'tachyons';
import App from './App';

/*Build my Routes*/
import Routes from './configs/routes';


ReactDOM.render(<Routes />, document.getElementById('root'));
