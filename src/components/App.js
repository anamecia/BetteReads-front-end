import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import NavBar from './NavBar';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signup' component={SignUpPage}/>
        <Route exact path='/signin' component={SignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
