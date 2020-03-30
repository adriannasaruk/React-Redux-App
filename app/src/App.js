import React from 'react';
import DogForm from './components/DogForm.js';
import './App.css';
import {createStore, applyMiddleware} from "redux";
import {dogreducer as reducer} from "./reducers/dogreducer";
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import Doglist from "./components/Doglist"



const store =  createStore(reducer, applyMiddleware(thunk))
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <h1>Here will you see today's picture!</h1>
      <DogForm />
      <Doglist />
    </div>
    </Provider>
  );
}

export default App;
