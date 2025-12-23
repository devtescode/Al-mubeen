import { CheckCircle2, Truck, MessageSquare } from 'lucide-react';

// Custom Naira Icon component
const NairaIcon = () => (
  <b className="text-2xl">₦</b> // text-2xl makes it bigger
);

const features = [
  {
    icon: CheckCircle2,
    title: 'Quality Materials',
    description: 'We source only the finest fabrics to ensure comfort and durability in every piece.',
  },
  {
    icon: NairaIcon, // Replaced DollarSign with NairaIcon
    title: 'Affordable Prices',
    description: 'Premium quality doesn\'t have to break the bank. We offer competitive pricing for everyone.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'We deliver to your doorstep anywhere in the country with reliable shipping partners.',
  },
  {
    icon: MessageSquare,
    title: 'Fast WhatsApp Response',
    description: 'Got questions? Our team responds quickly via WhatsApp to assist you.',
  },
];

// export default features;
// 

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-emerald-dark relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground/30 rounded-full" />
        <div className="absolute top-20 right-20 w-60 h-60 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-32 h-32 border border-primary-foreground/25 rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2.5 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium mb-6 border border-primary-foreground/20">
            ✨ Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Why Choose <span className="text-gold">Al-Mubeen Store</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            We're committed to providing the best shopping experience for our customers
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-primary-foreground/5 backdrop-blur-md rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/15 hover:border-primary-foreground/20 transition-all duration-500 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <feature.icon className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
