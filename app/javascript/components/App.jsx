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
  <Switch>
    <PrivateRoute exact path='/bytes' component={Homepage}/>
    {/* <Route exact path='/login' component={Login}/> */}
  </Switch>
);

export default App;
