import { Toaster } from "sonner";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
const queryClient = new QueryClient();
console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Toaster richColors position="top-center" />
        <AppRoutes />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
