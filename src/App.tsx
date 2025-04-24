import { Toaster } from "@/components/ui/toaster"; // ShadCN toaster
import { Toaster as Sonner } from "@/components/ui/sonner"; // Sonner toaster (optional, choose one)
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobListing from "./pages/JobListing.jsx";
import NotFound from "./pages/NotFound";
import OfferJob from "./pages/OfferJob.jsx";
import ViewJob from "./pages/ViewJob.jsx"
import RequestJob from "./pages/RequestJob.jsx"

// Initialize React Query client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Toast Components (you can remove one if you're only using one) */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/joblist" element={<JobListing />} />
            <Route path="/offerjobs" element={<OfferJob />} />
            <Route path="/viewjobs" element={<ViewJob />} />
            <Route path="/requestjobs" element={<RequestJob />} />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
