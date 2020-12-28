import React from 'react'
import PrivateRoute from './utility/PrivateRoute';
import Homepage from './Homepage';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path='/' component={Homepage}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  </Router>
);

export default App;
