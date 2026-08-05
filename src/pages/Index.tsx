import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-nails.jpg";
import nails1 from "@/assets/nails-art-1.jpg";
import nails2 from "@/assets/nails-art-2.jpg";
import nails3 from "@/assets/nails-art-3.jpg";
import pedicure from "@/assets/pedicure.jpg";

const services = [
  { n: "01", title: "Manicura rusa — cortas", price: "$45", duration: "Hard / Builder gel", desc: "Manicura rusa con hard o builder gel, longitud corta." },
  { n: "02", title: "Manicura rusa — medianas", price: "$55", duration: "Hard / Builder gel", desc: "Manicura rusa con hard o builder gel, longitud mediana." },
  { n: "03", title: "Manicura rusa — largas", price: "$60", duration: "Hard / Builder gel", desc: "Manicura rusa con hard o builder gel, longitud larga." },
  { n: "04", title: "MANicure", price: "$25", duration: "Classic", desc: "Manicura clásica con limado, cuidado de cutícula y esmaltado." },
  { n: "05", title: "Pedicura", price: "$60", duration: "Incluye color en gel", desc: "Pedicura completa con esmaltado en gel duradero." },
  { n: "06", title: "Extensión", price: "$65+", duration: "Gel tips o forms", desc: "Extensiones moldeadas para lograr la longitud deseada." },
  { n: "07", title: "Esmaltado gel en pies", price: "$25", duration: "Incluye limpieza", desc: "Esmaltado gel en pies con limpieza de cutícula." },
  { n: "08", title: "Broken nail", price: "$3+", duration: "Quick fix", desc: "Reparación rápida de una uña rota o dañada." },
  { n: "09", title: "Remoción", price: "$10", duration: "Trabajo externo", desc: "Remoción de trabajo no realizado por Karibe Nails." },
  { n: "10", title: "Nail art", price: "Varía", duration: "Add-ons", desc: "Diseños personalizados a mano. Precios varían según diseño." },
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

    {/* SERVICES & PRICES — editorial numbered list */}
    <section id="servicios" className="py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-5">
            <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">§ 01 — Servicios & Precios</p>
            <h2 className="font-display text-6xl leading-none text-foreground">
              El menú<br /><span className="italic">real.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 font-body text-lg text-foreground/70 leading-relaxed self-end">
            Precios claros y tiempos realistas. Desde manicura rusa hasta nail art a mano — todo en una sola pantalla.
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
              className="group grid grid-cols-12 gap-4 items-center py-6 border-b border-foreground/15 hover:bg-primary/5 transition-colors px-2"
            >
              <span className="col-span-2 md:col-span-1 font-body text-[11px] tracking-editorial text-primary">{s.n}</span>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-2xl md:text-4xl text-foreground group-hover:text-primary transition-colors leading-none">
                  {s.title}
                </h3>
              </div>
              <p className="col-span-12 md:col-span-4 font-body text-sm text-foreground/60 leading-relaxed">
                {s.desc}
              </p>
              <div className="col-span-6 md:col-span-2 font-body text-[11px] uppercase tracking-editorial text-foreground/50">
                {s.duration}
              </div>
              <div className="col-span-6 md:col-span-1 justify-self-end font-display text-2xl text-foreground">
                {s.price}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-editorial text-foreground/70 hover:text-primary"
          >
            Ver menú completo <ArrowUpRight size={14} />
          </Link>
          <Link
            to="/appointments"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-[11px] uppercase tracking-editorial font-semibold hover:bg-primary transition-colors"
          >
            Reservar ahora
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>

    {/* HOURS — editorial schedule */}
    <section id="horario" className="py-28 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5">
            <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">§ 02 — Horario</p>
            <h2 className="font-display text-6xl leading-none">
              Cuándo<br /><span className="italic">encontrarnos.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 font-body text-lg text-secondary-foreground/70 leading-relaxed self-end">
            Martes a sábado. Lunes y domingo cerrado. Fuera de este horario aplica costo adicional VIP.
          </p>
        </div>

        <div className="border-t border-foreground/15 max-w-4xl">
          {[
            { day: "Martes", time: "9am – 4pm" },
            { day: "Miércoles", time: "8am – 4pm" },
            { day: "Jueves", time: "1pm – 5pm" },
            { day: "Viernes", time: "8am – 3pm" },
            { day: "Sábado", time: "9am – 5pm" },
            { day: "Lunes / Domingo", time: "Cerrado" },
          ].map((h) => (
            <motion.div
              key={h.day}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-baseline justify-between py-5 border-b border-foreground/15"
            >
              <span className="font-display text-2xl md:text-4xl text-foreground leading-none">{h.day}</span>
              <span className="font-body text-sm md:text-base text-secondary-foreground/70 tabular-nums">{h.time}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs font-body text-secondary-foreground/60 leading-relaxed max-w-2xl">
          * Horario fuera de este rango tiene costo adicional{" "}
          <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground font-semibold tracking-wider">VIP</span>.
        </p>
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
