import './App.css';
import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Startbook from './components/Startbook/Startbook';
import Hotelbook from './components/Hotelbook/Hotelbook';
import Login from './components/Login/Login';
import CreateAccount from './components/CreateAccount/CreateAccount';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setloggedInUser] = useState();
  return (
    <UserContext.Provider value = {[loggedInUser,setloggedInUser]}>
      <Router>
        <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/startbook">
          <Startbook></Startbook>
        </Route>
        <PrivateRoute path="/hotelbook">
          <Hotelbook></Hotelbook>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/createaccount">
          <CreateAccount></CreateAccount>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        </Switch>
      </Router>  
    </UserContext.Provider>
  );
}


export default App;
