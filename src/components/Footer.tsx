import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
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
            <a href="https://instagram.com/karibenails" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-background/10 hover:bg-primary transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com/karibenails" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-background/10 hover:bg-primary transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
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
