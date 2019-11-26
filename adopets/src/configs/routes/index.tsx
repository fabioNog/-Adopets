 import React from "react";
 import Provider from 'redux'
 import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
 
import Login from '../../components/Login'
import {isAutheticated} from './auth'


const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
    const routeComponent = (props: any) => (
        isAuthenticated
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/'}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};
 
 function AppRouter() {
   return (
   <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
   );
 }

 export default AppRouter;