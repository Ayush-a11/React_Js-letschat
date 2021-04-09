import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './chat';
import Login from './Login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function App() {
  
  const[{user},dispatch]=useStateValue();

  return (
    <div className="app">
     {!user ? (
       <Login/>
     ):(
      <div className="app_body">
      <Router>
      <Sidebar/>
        <Switch>
          <Route path="/Rooms/:roomId">
          <Chat/>
          </Route>
          <Route path="/">
          
          <Chat/>
          </Route>
          
          </Switch>
        </Router>
      </div>

     )} 
    </div>
  );
}

export default App;
