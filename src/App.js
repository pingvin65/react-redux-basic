import React from 'react';
import { useSelector } from 'react-redux';

import Login from './components/login';
import Counter from './components/counter';

import './App.css';

function App() {

  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      { isLogged ? <Counter></Counter> : <Login></Login>}
    </div>
  );
}

export default App;
