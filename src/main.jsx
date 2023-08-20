import React from 'react';
import createRoot from 'react-dom'
import App from './App';
import { Provider } from "react-redux"
import store from "./Redux/store"

createRoot.render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)