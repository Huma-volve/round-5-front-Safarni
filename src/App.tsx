import { Toaster } from 'sonner';
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" /> 
       <AppRoutes />
     </QueryClientProvider>
  )
}

export default App
