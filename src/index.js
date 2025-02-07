import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bounce, ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <App />
    </Provider>
  </React.StrictMode>
);

