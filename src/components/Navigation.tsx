
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { path: "/", label: "About" },
    { path: "/projects", label: "Experience" },
    { path: "/interviews", label: "Hall of Fame" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors animate-float">
            gabriela caballero
          </Link>
          
          {isMobile ? (
            <>
              <button 
                onClick={toggleMobileMenu} 
                className="p-2 rounded-md hover:bg-secondary/20 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border py-4 animate-fade-in">
                  <div className="flex flex-col items-center gap-6 px-6">
                    {links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`relative py-2 text-lg ${
                          isActive(link.path)
                            ? "text-primary font-medium"
                            : "text-foreground hover:text-primary transition-colors"
                        }`}
                      >
                        {link.label}
                        {isActive(link.path) && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex gap-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 hover-lift ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary transition-colors"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
