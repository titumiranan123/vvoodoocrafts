
import ReactDOM from 'react-dom';
import './index.css';

import routes from './routes/routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './provider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Suspense } from 'react';
import Loader from './component/Utilitis/Loader.jsx';


// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(

  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loader />}>
      <AuthProvider><RouterProvider router={routes} /></AuthProvider>
    </Suspense>

  </QueryClientProvider>


);
