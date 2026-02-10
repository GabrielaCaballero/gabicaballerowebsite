import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Interviews from "./components/Interviews";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navigation />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/interviews" element={<Interviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
          <footer className="border-t border-border py-6 text-center">
            <p className="text-xs text-muted-foreground mb-2">
              © 2026 Gabriela Caballero • Zurich
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://substack.com/@gabycaballero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-muted-foreground hover:text-primary font-black tracking-[0.2em] uppercase transition-colors"
              >
                Substack
              </a>
              <p className="text-[11px] text-muted-foreground italic">
                XOXO — GOSSIP GIRL
              </p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
