import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from '../src/components/Profile'
import SignIn from '../src/components/auth/SignIn';
import SignUp from '../src/components/auth/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact >
            <Profile />
          </Route>
          <Route path="/signin" exact >
            <SignIn />
          </Route>
          <Route path="/signup" exact >
            <SignUp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
