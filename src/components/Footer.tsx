import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/karibe-logo.jpg";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="Karibe Nails" className="h-16 w-auto rounded-lg mb-4" />
          <p className="text-background/70 text-sm font-body leading-relaxed">
            Vibrant nails inspired by the Caribbean. Premium nail art in San Juan, Puerto Rico.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Book Now", path: "/appointments" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-background/70 hover:text-primary text-sm font-body transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-background/70 font-body">
            <div className="flex items-center gap-2"><Phone size={14} /> +1-787-123-4567</div>
            <div className="flex items-center gap-2"><Mail size={14} /> info@karibenails.com</div>
            <div className="flex items-center gap-2"><MapPin size={14} /> San Juan, Puerto Rico</div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-lg mb-4">Hours</h4>
          <div className="flex flex-col gap-2 text-sm text-background/70 font-body">
            <p>Mon – Fri: 9am – 7pm</p>
            <p>Saturday: 10am – 6pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-6 text-center text-sm text-background/50 font-body">
        © {new Date().getFullYear()} Karibe Nails. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
