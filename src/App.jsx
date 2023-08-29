import AuthProvider from '@/contexts/Auth';
import ThemeProvider from '@/contexts/Theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const queryClient = new QueryClient();

console.log(queryClient);

function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <div className="App">
                <RouterProvider router={router} />
              </div>
              <ReactQueryDevtools />
            </QueryClientProvider>
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
      <Toaster />
    </>
  );
}

export default App;
