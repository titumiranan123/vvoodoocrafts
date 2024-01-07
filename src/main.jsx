
import ReactDOM from 'react-dom';
import './index.css';

import routes from './routes/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider><RouterProvider router={routes} /></AuthProvider>
  </QueryClientProvider>


);
