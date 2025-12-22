import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/+2348164363363?text=Hello! I would like to place an order.', '_blank');
  };

  const scrollToStore = () => {
    const element = document.querySelector('#store');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Start Shopping Today
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready to Upgrade Your{' '}
            <span className="text-gradient">Wardrobe?</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Browse our collection and place your order today. Our friendly team is waiting to assist you with your fashion needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={openWhatsApp}
              className="gap-3 text-lg px-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6" />
              Order Now on WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              onClick={scrollToStore}
              className="gap-3 text-lg px-8 border-2 hover:bg-accent transition-all duration-300"
            >
              <ShoppingBag className="h-6 w-6" />
              Browse Collection
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/30">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Phone Number</h3>
            <p className="font-body text-muted-foreground">+234 816 436 3363</p>
          </div>

          <div className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/30">
            <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
            <a 
              href="https://wa.me/+2348164363363" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-primary hover:underline inline-flex items-center gap-1"
            >
              Chat with us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/30">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Email Address</h3>
            <p className="font-body text-muted-foreground">mubinatarinola@gmail.com</p>
          </div>

          <div className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-primary/30">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-emerald-dark rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Location</h3>
            <p className="font-body text-muted-foreground">Adeta round about ilorin Kwara state</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
