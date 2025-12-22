import { Sparkles, Heart, Star, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6 border border-border/50">
              <Sparkles className="h-4 w-4" />
              Our Story
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              About <span className="text-gradient">Al-Mubeen Store</span>
            </h2>
            
            <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Al-Mubeen Store</strong> is a trusted clothing brand committed 
                to providing stylish, affordable, and quality outfits for everyday wear.
              </p>
              <p>
                Founded with a vision to make fashion accessible to everyone, we carefully 
                curate our collection to ensure every piece meets our high standards of 
                quality and style.
              </p>
              <p>
                Whether you're shopping for yourself, your partner, or your kids, 
                Al-Mubeen Store has something special for everyone in the family.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center p-5 bg-gradient-to-br from-accent to-accent/50 rounded-2xl border border-border/30 hover:shadow-soft transition-all duration-300">
                <p className="font-display text-4xl font-bold text-primary mb-1">5+</p>
                <p className="font-body text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-accent to-accent/50 rounded-2xl border border-border/30 hover:shadow-soft transition-all duration-300">
                <p className="font-display text-4xl font-bold text-primary mb-1">10K+</p>
                <p className="font-body text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-accent to-accent/50 rounded-2xl border border-border/30 hover:shadow-soft transition-all duration-300">
                <p className="font-display text-4xl font-bold text-primary mb-1">500+</p>
                <p className="font-body text-sm text-muted-foreground">Products</p>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image Grid */}
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-primary to-emerald-dark rounded-3xl h-52 flex flex-col items-center justify-center shadow-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">👔</span>
                <span className="font-body text-sm text-primary-foreground/80">Men's Wear</span>
              </div>
              <div className="bg-gradient-to-br from-gold-light to-secondary/30 rounded-3xl h-72 flex flex-col items-center justify-center shadow-card group hover:scale-105 transition-all duration-300 cursor-pointer border border-border/30">
                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">👗</span>
                <span className="font-body text-sm text-foreground/80">Women's Wear</span>
              </div>
            </div>
            <div className="space-y-5 pt-10">
              <div className="bg-gradient-to-br from-emerald-light to-accent rounded-3xl h-72 flex flex-col items-center justify-center shadow-card group hover:scale-105 transition-all duration-300 cursor-pointer border border-border/30">
                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">👟</span>
                <span className="font-body text-sm text-foreground/80">Footwear</span>
              </div>
              <div className="bg-gradient-to-br from-secondary to-gold rounded-3xl h-52 flex flex-col items-center justify-center shadow-card group hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">⌚</span>
                <span className="font-body text-sm text-foreground/80">Watch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Heart className="h-6 w-6 text-destructive" />
              <span className="font-body text-sm">Satisfaction guaranteed</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Star className="h-6 w-6 text-secondary" />
              <span className="font-body text-sm">Premium Quality</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Award className="h-6 w-6 text-primary" />
              <span className="font-body text-sm">Trusted Brand</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Sparkles className="h-6 w-6 text-gold" />
              <span className="font-body text-sm">Unique Styles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
