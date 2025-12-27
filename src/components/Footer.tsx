import { Instagram, Facebook, MessageCircle, Users } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // TikTok icon

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/almubeencollection?igsh=MWk0aDE5Zmx5aHAy&utm_source=qr',
    color: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/holori.harlarbeey',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Tiktok',
    icon: FaTiktok,
    href: 'www.tiktok.com/@almubeenalmubeen',
    color: 'hover:bg-black hover:text-white'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/+2348164363363',
    color: 'hover:bg-[#25D366]'
  },
  {
    name: 'WhatsApp Group',
    icon: Users,
    href: 'https://chat.whatsapp.com/EgWUZ4CruCA6wEnoADbhRX',
    color: 'hover:bg-[#25D366]'
  },
];


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />
      
      {/* Social Media Section */}
      <div className="border-b border-background/10 relative">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl font-bold mb-3">Stay Connected</h3>
            <p className="font-body text-lg text-background/70">Follow us for updates, new arrivals, and exclusive offers</p>
          </div>
          
          <div className="flex justify-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-16 h-16 bg-background/10 rounded-2xl flex items-center justify-center transition-all duration-300 ${social.color} hover:text-background group hover:scale-110 hover:-translate-y-1 hover:shadow-xl`}
                title={social.name}
              >
                <social.icon className="h-7 w-7 text-background group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h4 className="font-display text-2xl font-bold mb-4">
              Al-Mubeen <span className="text-gold">Store</span>
            </h4>
            <p className="font-body text-background/70 mb-6 leading-relaxed">
              Your trusted destination for quality, affordable, and stylish clothing for the whole family.
            </p>
            {/* <div className="flex gap-2 items-center text-sm text-background/50">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive fill-destructive" />
              <span>in Nigeria</span>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 font-body">
              <li>
                <a href="#home" className="text-background/70 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </a>
              </li>
              <li>
                <a href="#store" className="text-background/70 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Store
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-gold transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 font-body text-background/70">
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center text-lg">📞</span>
                <span>+234 816 436 3363</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center text-lg">✉️</span>
                <span>mubinatarinola@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center text-lg">📍</span>
                <span>Adeta round about ilorin kwara state</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="border-t border-background/10 mt-14 pt-8 text-center">
          <p className="font-body text-sm text-background/50">
            © {currentYear} Al-Mubeen Store. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
