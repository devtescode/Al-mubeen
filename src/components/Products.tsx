import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product4 from '@/assets/product-4.jpg';
import Topone from '@/assets/Top-one.jpg';
import Toptwo from '@/assets/Top-two.jpg';
import Topthree from '@/assets/Top-three.jpg';
import Bagthree from '@/assets/Bag-three.jpg';
import Dressthree from '@/assets/Dress-three.jpg';
import Shoeone from '@/assets/Shoe-one.jpg';
import Slipperfive from '@/assets/Slipper-five.jpg';
import Slippersix from '@/assets/slipper-six.jpg';

const categories = ['All', "Men's Wear", "Women's Wear", "Bag", 'Shoes'];

const products = [
  {
    id: 1,
    name: 'Classic Navy Shirt',
    price: 4500,
    category: "Men's Wear",
    image: product1,
    sizes: ['S', 'M', 'L', 'XL'],
  },

  {
    id: 2,
    name: 'Elegant Cream Blouse',
    price: 5800,
    category: "Women's Wear",
    image: product2,
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 3,
    name: 'Luxury Mini Bag',
    price: "19,500",
    category: "Bag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop",
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 4,
    name: 'Urban Sport Sneakers',
    price: 25000,
    category: 'Shoes',
    image: product4,
    sizes: ['40', '41', '42', '43', '44'],
  },
  {
    id: 5,
    name: "Classic Top Shirt",
    price: "8,000",
    category: "Men's Wear",
    image: Topone,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "PREMIUM QUALITY LONGSLEEVE",
    price: "20,000",
    category: "Men's Wear",
    image: Toptwo,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "PREMIUM QUALITY ROUNDNECK",
    price: "20,000",
    category: "Men's Wear",
    image: Topthree,
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Premium Bag",
    price: "12,000",
    category: "Bag",
    image: Bagthree,
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 9,
    name: "Luxury up and down",
    price: "23,000",
    category: "Women's Wear",
    image: Dressthree,
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 10,
    name: 'BALENCIAGA (thick rope) LUXURY DRIP Sneakers',
    price: 30000,
    category: 'Shoes',
    image: Shoeone,
    sizes: ['40', '41', '42', '43', '44'],
  },
  {
    id: 11,
    name: 'ORIGINAL (High Quality) Slippers',
    price: 16000,
    category: 'Shoes',
    image: Slipperfive,
    sizes: ['39', '40', '41', '42', '43', '44'],
  },
  {
    id: 12,
    name: 'ORIGINAL (High Quality) Slippers',
    price: 7500,
    category: 'Shoes',
    image: Slippersix,
    sizes: ['39', '40', '41', '42', '43', '44'],
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const orderViaWhatsApp = () => {
    const message = `Hello! I would like to order:\n\nProduct: ${product.name}\nSize: ${selectedSize || 'Not selected'}\nPrice: ₦${product.price.toLocaleString()}`;
    window.open(`https://wa.me/+2348164363363?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/30 hover:border-primary/20 hover:-translate-y-2">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
            {product.category}
          </span>
        </div>
        {/* Quick Order Badge */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button 
            variant="whatsapp" 
            size="sm" 
            onClick={orderViaWhatsApp} 
            className="w-full gap-2 shadow-xl"
          >
            <MessageCircle className="h-4 w-4" />
            Quick Order
          </Button>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="font-body text-2xl font-bold text-primary mb-4">
          ₦{product.price.toLocaleString()}
        </p>
        
        {/* Size Options */}
        <div className="mb-4">
          <p className="font-body text-sm text-muted-foreground mb-2">Select Size:</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg border-2 transition-all duration-200 ${
                  selectedSize === size
                    ? 'bg-primary text-primary-foreground border-primary scale-105 shadow-md'
                    : 'bg-background text-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          {/* <Button variant="outline" size="sm" className="flex-1 gap-2 border-2 hover:bg-accent">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button> */}
          {/* <Button variant="whatsapp" size="sm" onClick={orderViaWhatsApp} className="gap-2">
            <MessageCircle className="h-4 w-4" />
            Order
          </Button> */}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="store" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Our Collection
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Shop Our <span className="text-gradient">Best Sellers</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of quality clothing for the whole family
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-card text-foreground hover:bg-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
