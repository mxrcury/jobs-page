import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App'
import { Provider } from "./providers/context";


const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);