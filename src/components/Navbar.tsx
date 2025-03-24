
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Properties', path: '/properties' },
    { title: 'How It Works', path: '/how-it-works' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-primary font-bold text-xl md:text-2xl transition-all"
          >
            <span className="text-2xl md:text-3xl">SpaceXec</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                  location.pathname === link.path ? "text-primary after:w-full" : "text-foreground/80"
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              to="/login"
              className="flex items-center justify-center h-10 px-4 py-2 rounded-full bg-primary text-white font-medium text-sm transition-all hover:bg-primary/90"
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background animate-fade-in z-40">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 transition-colors",
                  location.pathname === link.path ? "text-primary" : "text-foreground/80"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link
                to="/login"
                className="flex items-center justify-center w-full h-12 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
