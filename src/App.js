import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './chat';
function App() {
  return (
    <div className="app">

    <div className="app_body">
      {/*sidebar*/}
      <Sidebar/>
      
      {/*chatbar*/}
      <Chat/>
    </div>

    </div>
  );
}

export default App;
