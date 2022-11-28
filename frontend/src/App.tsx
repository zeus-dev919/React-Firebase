import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Router from './pages/Router';
import './App.css';
import rootreducer from './reducers';
import './style/bootstrap.min.css'

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootreducer });

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter basename="/weborder">
          <Router />
        </BrowserRouter>
    </Provider>

  );
}

export default App;
