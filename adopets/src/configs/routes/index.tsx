 import React , {useState} from "react";
 import Provider from 'redux'
 import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
 
import Login from '../../components/Login'
import {isAuthenticated} from './auth'



 
 function AppRouter() {
   const [auth,setAuth] = useState(true)
   
   const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
      const routeComponent = (props: any) => (
          isAuthenticated
              ? React.createElement(component, props)
              : <Redirect to={{pathname: '/login'}}/>
      );
      return <Route {...rest} render={routeComponent}/>;
    };
   return (
   <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute isAuthenticated={auth} path="/" component={() => <h1>Você está logado</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
   );
 }

 export default AppRouter;