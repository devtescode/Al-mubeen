import { useState } from 'react';
import { Menu, X, ShoppingCart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Store', href: '#store' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    
    window.open('https://wa.me/+2348164363363?text=Hello! I\'m interested in your products. Please help me with my order.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl font-bold text-primary">
              Al-Mubeen
            </span>
            <span className="font-display text-sm md:text-base text-muted-foreground">
              Store
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button> */}
            <Button variant="whatsapp" size="sm" className="gap-2"  onClick={openWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="font-body text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {/* <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center">
                    0
                  </span>
                </Button> */}
                <Button variant="whatsapp" size="sm" className="gap-2 flex-1">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
