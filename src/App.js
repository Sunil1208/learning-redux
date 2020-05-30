import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const islogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Counter: {counter} </h1>
        <button onClick={() => dispatch(increment(5))} >+</button>
        <button onClick={() => dispatch(decrement())} >-</button>
        {islogged && (
          <h1>Valuable login information : {islogged}</h1>
        )}
       
      </header>
    </div>
  );
}

export default App;
