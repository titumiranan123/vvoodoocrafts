import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './App.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App>
      <QueryClientProvider client={queryClient}>
        <AuthProvider><RouterProvider router={routes} /></AuthProvider>
      </QueryClientProvider>
    </App>
  </Provider>
);
