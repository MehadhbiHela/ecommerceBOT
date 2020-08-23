import React from 'react';
import logo from './logo.svg';
import './App.css';
import  SignUp from "./components/inscription";
import { Provider } from 'react-redux'
import {store} from "./redux/store";
function App() {
  return (
    <Provider store={store}>{console.log('***********',store.getState())}<SignUp/></Provider>
  );
}

export default App;
