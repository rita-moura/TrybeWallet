import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Switch>
        <Route component={ Login } exact path="/" />
        <Route component={ Wallet } exact path="/carteira" />
      </Switch>
    </div>
  );
}

export default App;
