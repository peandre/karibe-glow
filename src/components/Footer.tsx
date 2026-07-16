import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const IgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FbIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 pt-20 pb-10">
      {/* Massive brand mark */}
      <div className="border-b border-background/10 pb-10 mb-12">
        <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-6">
          — Caribbean nail atelier
        </p>
        <h2 className="display-mega text-background">
          Karibe<span className="text-primary">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Statement */}
        <div className="md:col-span-5">
          <p className="text-background/70 font-body text-sm leading-relaxed max-w-sm">
            Nails as canvas. Ten years of tropical craft in the heart of San Juan,
            Puerto Rico — reserved, precise, unmistakably ours.
          </p>
          <div className="flex gap-2 mt-6">
            <a
              href="https://instagram.com/karibenails"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-background/20 hover:bg-primary hover:border-primary transition-colors"
              aria-label="Instagram"
            >
              <IgIcon />
            </a>
            <a
              href="https://facebook.com/karibenails"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-background/20 hover:bg-primary hover:border-primary transition-colors"
              aria-label="Facebook"
            >
              <FbIcon />
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div className="md:col-span-3">
          <h4 className="font-body text-[11px] uppercase tracking-editorial text-primary mb-5">
            Navigate
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "Book Now", path: "/appointments" },
            ].map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="font-display text-2xl text-background hover:text-primary transition-colors leading-none"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact + Hours */}
        <div className="md:col-span-4">
          <h4 className="font-body text-[11px] uppercase tracking-editorial text-primary mb-5">
            Studio
          </h4>
          <div className="flex flex-col gap-3 text-sm text-background/70 font-body mb-8">
            <div className="flex items-center gap-3"><Phone size={14} /> +1-787-123-4567</div>
            <div className="flex items-center gap-3"><Mail size={14} /> info@karibenails.com</div>
            <div className="flex items-center gap-3"><MapPin size={14} /> San Juan, Puerto Rico</div>
          </div>
          <h4 className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">
            Horario
          </h4>
          <div className="flex flex-col gap-1 text-sm text-background/70 font-body">
            <p><span className="text-background/50">Martes</span>  ·  9am – 4pm</p>
            <p><span className="text-background/50">Miércoles</span>  ·  8am – 4pm</p>
            <p><span className="text-background/50">Jueves</span>  ·  1pm – 5pm</p>
            <p><span className="text-background/50">Viernes</span>  ·  8am – 3pm</p>
            <p><span className="text-background/50">Sábado</span>  ·  9am – 5pm</p>
            <p><span className="text-background/50">Lun / Dom</span>  ·  Cerrado</p>
          </div>
          <p className="mt-4 text-xs text-background/50 font-body leading-relaxed">
            * Horario fuera de este rango tiene costo adicional <span className="text-primary font-semibold">VIP</span>.
          </p>
        </div>
      </div>

      <div className="border-t border-background/10 mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/40 font-body uppercase tracking-editorial">
        <span>© {new Date().getFullYear()} Karibe Nails</span>
        <span>San Juan · Puerto Rico</span>
      </div>
    </div>
  </footer>
);

export default Footer;
