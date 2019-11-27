 import React from "react";
 import Provider from 'redux'
 import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
 
import Login from '../../components/Login'
import {isAuthenticated} from './auth'


const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/login'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};
 
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