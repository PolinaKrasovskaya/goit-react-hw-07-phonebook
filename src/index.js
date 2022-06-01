import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';

// import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/goit-react-hw-07-phonebook/"> */}
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
);
