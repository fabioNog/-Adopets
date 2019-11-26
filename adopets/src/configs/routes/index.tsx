 import React from "react";
 import Provider from 'redux'
 import { HashRouter as Router, Route, Switch } from 'react-router-dom'
 
import Login from '../../components/Login'

 
 function AppRouter() {
   return (
   <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </Router>
   );
 }

 export default AppRouter;