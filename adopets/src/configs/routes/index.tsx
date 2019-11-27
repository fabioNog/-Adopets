 import React , {useState} from "react";
 import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
 
import Login from '../../components/Login'
 
 function AppRouter() {
   const [auth,setAuth] = useState(false)
   
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