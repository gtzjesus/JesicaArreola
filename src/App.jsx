import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';

// Code logic for integrating React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// Code logic for creating the router from React Router Dom (our pages/paths)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  // Load all the webpages in this app on top of browser automatically
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
