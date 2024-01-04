import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import routes from './routes/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider><RouterProvider router={routes} /></AuthProvider>

);
