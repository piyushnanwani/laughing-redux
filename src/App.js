import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, signin} from './actions'

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch()
  return (
    <div className="App">
      Counter {counter}
      /<button type="" onClick={() => dispatch(increment(0))} >+</button>
      /<button type="" onClick={() => dispatch(decrement())} >-</button>
      /<button type="" onClick={() => dispatch(signin())} >Sign In</button>
      {isLogged ? <h1>You logged in without a password, genius !!</h1> : null}
    </div>
  );
}

export default App;
