import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import {ToastContainer} from "react-toastify";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./store/store"
// import store from "./store/store"

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
