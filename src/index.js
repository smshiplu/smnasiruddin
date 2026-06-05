import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bounce, ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';
import store from './store/store';



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
        theme="dark"
        transition={Bounce}
      />
      <App />
    </Provider>
  </React.StrictMode>
);

