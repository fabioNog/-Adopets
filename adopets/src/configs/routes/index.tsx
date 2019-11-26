 import React from "react";
 import Provider from 'redux'
 import { BrowserRouter, Route, Switch } from 'react-router-dom'
 
import Login from '../../components/Login'
import {isAutheticated} from './auth'
import  PrivateRoute from './privateRoute'
 function AppRouter() {
   return (
   <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={() => <h1>Você está logado</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
   );
 }

 export default AppRouter;