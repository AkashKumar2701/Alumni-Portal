import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom'

import React, { useEffect } from 'react';

import Homepage from './components/Homepage/Homepage';
import SignupSignin from './components/SignupSignIn/SignupSignin';
import Faculty from './components/Faculty/Faculty';
import Alumni from './components/Alumni/Alumni';

import { useDispatch } from 'react-redux';

import { fetchAll } from './actions/faculty'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll())
  }, [dispatch])

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>

            <Route exact path='/auth'>
              <SignupSignin />
            </Route>

            <Route exact path='/faculty'>
              <Faculty />
            </Route>

            <Route exact path='/alumni'>
              <Alumni />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;