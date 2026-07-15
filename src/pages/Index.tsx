import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-nails.jpg";
import nails1 from "@/assets/nails-art-1.jpg";
import nails2 from "@/assets/nails-art-2.jpg";
import nails3 from "@/assets/nails-art-3.jpg";
import pedicure from "@/assets/pedicure.jpg";

const services = [
  { n: "01", title: "Manicures", desc: "Classic and gel treatments, precisely finished." },
  { n: "02", title: "Pedicures", desc: "Restorative spa rituals from ankle to arch." },
  { n: "03", title: "Nail Art", desc: "Signature tropical iconography, drawn by hand." },
  { n: "04", title: "Acrylics & Gel", desc: "Extensions built to hold shape and shine." },
];

const testimonials = [
  { name: "María G.", role: "San Juan", comment: "The best nail salon in San Juan. Karina is an artist — my tropical designs never disappoint." },
  { name: "Sofia R.", role: "Condado", comment: "Professional, creative and always on point. My go-to for every occasion that matters." },
  { name: "Isabella M.", role: "Miramar", comment: "The attention to detail is quietly incredible. Worth every peso." },
];

const Index = () => (
  <div className="bg-background">
    {/* HERO — asymmetric split */}
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 relative z-10"
        >
          <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-6">
            Est. 2015 — San Juan, PR · Issue Nº 01
          </p>
          <h1 className="display-mega text-foreground">
            Nails as<br />
            <span className="italic text-primary">canvas.</span>
          </h1>
          <div className="mt-10 max-w-md">
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              A quiet nail atelier where Caribbean colour, meticulous craft
              and ten years of hand-drawn detail meet at your fingertips.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <Link
                to="/appointments"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-editorial font-semibold hover:bg-primary transition-colors"
              >
                Reserve a seat
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                to="/portfolio"
                className="font-body text-[11px] uppercase tracking-editorial text-foreground/70 hover:text-primary transition-colors border-b border-foreground/30 pb-1"
              >
                See the archive
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img src={heroImg} alt="Karibe Nails salon" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-5 max-w-[180px] shadow-coral">
            <p className="font-display text-3xl leading-none">10<span className="text-lg">yrs</span></p>
            <p className="font-body text-[10px] uppercase tracking-editorial mt-2">of Caribbean craft</p>
          </div>
        </motion.div>
      </div>

      {/* Rotating marquee band */}
      <div className="mt-20 border-y border-foreground/10 py-5 overflow-hidden">
        <div className="flex gap-14 animate-marquee whitespace-nowrap font-display text-3xl md:text-4xl">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Coral", "★", "Hand-drawn", "★", "San Juan", "★", "Gel & Acrylic", "★", "Tropical", "★", "Precision", "★"].map((w, i) => (
              <span key={`${k}-${i}`} className={i % 2 === 0 ? "text-foreground italic" : "text-primary"}>
                {w}
              </span>
            ))
          )}
        </div>
      </div>
    </section>

    {/* SERVICES — editorial numbered list */}
    <section className="py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">§ 01 — Services</p>
            <h2 className="font-display text-6xl leading-none text-foreground">
              What we<br /><span className="italic">do best.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 font-body text-lg text-foreground/70 leading-relaxed self-end">
            Four disciplines. One quiet obsession with getting every edge, curve
            and colour exactly right.
          </p>
        </div>

        <div className="border-t border-foreground/15">
          {services.map((s) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group grid grid-cols-12 items-center py-8 border-b border-foreground/15 hover:bg-primary/5 transition-colors px-2"
            >
              <span className="col-span-2 md:col-span-1 font-body text-[11px] tracking-editorial text-primary">{s.n}</span>
              <h3 className="col-span-10 md:col-span-4 font-display text-3xl md:text-5xl text-foreground group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="hidden md:block md:col-span-5 font-body text-sm text-foreground/60 leading-relaxed">
                {s.desc}
              </p>
              <ArrowUpRight
                size={28}
                className="col-span-12 md:col-span-2 justify-self-end text-foreground/40 group-hover:text-primary group-hover:rotate-45 transition-all mt-4 md:mt-0"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-editorial text-foreground/70 hover:text-primary"
          >
            Full service index <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* PORTFOLIO PREVIEW — masonry */}
    <section className="py-28 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-6">
            <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">§ 02 — Archive</p>
            <h2 className="font-display text-6xl md:text-7xl leading-none">
              A hand-made<br /><span className="italic text-primary">archive.</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="lg:col-span-6 lg:justify-self-end group inline-flex items-center gap-3 border border-background/30 px-6 py-4 text-[11px] uppercase tracking-editorial hover:bg-primary hover:border-primary transition-colors"
          >
            View the full archive
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {[
            { src: nails1, h: "aspect-[3/4]" },
            { src: nails2, h: "aspect-square" },
            { src: pedicure, h: "aspect-[4/5]" },
            { src: nails3, h: "aspect-[3/4]" },
            { src: nails1, h: "aspect-square" },
            { src: nails2, h: "aspect-[4/5]" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`overflow-hidden break-inside-avoid ${img.h}`}
            >
              <img
                src={img.src}
                alt={`Nail art ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIALS — quiet, editorial */}
    <section className="py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">§ 03 — In their words</p>
          <h2 className="font-display text-6xl leading-none">
            What clients<br /><span className="italic">whisper.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-10"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-2xl leading-tight text-foreground mb-8">
                “{t.comment}”
              </p>
              <div className="flex items-center justify-between border-t border-foreground/10 pt-4">
                <span className="font-body text-sm font-semibold">{t.name}</span>
                <span className="font-body text-[10px] uppercase tracking-editorial text-foreground/50">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA — coral gradient */}
    <section className="relative py-32 overflow-hidden gradient-coral text-primary-foreground">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <p className="font-body text-[11px] uppercase tracking-editorial mb-6 opacity-80">
          Reserve · San Juan
        </p>
        <h2 className="display-mega mb-8">
          Your seat is<br /><span className="italic">waiting.</span>
        </h2>
        <Link
          to="/appointments"
          className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 text-[11px] uppercase tracking-editorial font-semibold hover:bg-foreground hover:text-background transition-colors"
        >
          Book your appointment
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
