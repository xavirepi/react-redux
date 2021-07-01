import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

function App() {
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
      </header>
    </div>
  );
}

export default App;

const defaultState = {
  welcome: 'Hi',
  otherState: 'Some stuff',
  anotherState: 'Some other stuff'
}

// Reducer
const greeting = (state = defaultState, action) => { // If state is passed as an argument use state, otherwise use default state.
  // Supose we have a window toggle
  switch (action.type) {
    case 'GREET_ME':
      return {  ...state, welcome: 'Hello Javier' };
    case 'GREET_WORLD':
      return { ...state, welcome: 'Hello World' };
    default: 
      return state;
  }
  // An action is an object (decriber) - Dispatch --> Go do what the actions says
};

const store = createStore(greeting);
console.log(store.getState());

// Action
store.dispatch({ // Dispatch is a method of store 
  // Actions can include data, a payload when calling an API or all sort of stuff
  type: 'GREET_ME'
})

console.log('state:', store.getState());