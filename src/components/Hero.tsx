import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToStore = () => {
    const element = document.querySelector('#store');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {

    window.open('https://wa.me/+2348164363363?text=Hello! I\'m interested in your products. Please help me with my order.', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 mt-0 md:mt-5 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Al-Mubeen Store - Quality Clothing"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span
            className="inline-block px-4 py-2 bg-gold-light text-secondary-foreground rounded-full text-sm font-medium mb-6 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            ✨ New Collection Available
          </span>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Quality & Affordable
            <span className="block text-gold">Clothes, Shoes And Slippers for Everyone</span>
          </h1>

          <p
            className="font-body text-lg md:text-xl text-background/80 mb-8 max-w-lg animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            We sell original and stylish shoes, slippers, and flasks for men, women, and kids.
            Experience premium quality at prices that won’t break the bank.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Button
              variant="gold"
              size="xl"
              onClick={scrollToStore}
              className="gap-2"
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={openWhatsApp}
              className="gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Contact Us
            </Button>
          </div>

          {/* Trust Badges */}
          <div
            className="flex flex-wrap gap-6 mt-12 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center gap-2 text-background/70">
              <span className="text-2xl">🚚</span>
              <span className="font-body text-sm">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-background/70">
              <span className="text-2xl">✅</span>
              <span className="font-body text-sm">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-background/70">
              <span className="text-2xl">💬</span>
              <span className="font-body text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
