import React from 'react';
import './App.css';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import {Main} from './layouts/Main';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
