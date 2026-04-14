import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Heart, Palette, Star } from "lucide-react";
import heroImg from "@/assets/hero-nails.jpg";
import nails1 from "@/assets/nails-art-1.jpg";
import nails2 from "@/assets/nails-art-2.jpg";
import nails3 from "@/assets/nails-art-3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  { icon: Sparkles, title: "Manicures", desc: "Classic and gel manicures with premium polish" },
  { icon: Heart, title: "Pedicures", desc: "Relaxing pedicure treatments for beautiful feet" },
  { icon: Palette, title: "Nail Art", desc: "Tropical-themed custom designs" },
  { icon: Star, title: "Acrylics & Gel", desc: "Full sets, fills, and gel extensions" },
];

const testimonials = [
  { name: "María G.", rating: 5, comment: "The best nail salon in San Juan! Karina is an amazing artist. Love my tropical designs!" },
  { name: "Sofia R.", rating: 5, comment: "Professional, creative, and always on point. My go-to for every special occasion." },
  { name: "Isabella M.", rating: 5, comment: "The attention to detail is incredible. Worth every penny!" },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Karibe Nails salon" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative text-center px-4"
      >
        <h1 className="font-display text-5xl md:text-7xl text-background mb-4 drop-shadow-lg">
          Karibe Nails
        </h1>
        <p className="font-body text-lg md:text-xl text-background/90 mb-8 max-w-lg mx-auto">
          Vibrant Nails Inspired by the Caribbean
        </p>
        <Link
          to="/appointments"
          className="inline-block gradient-tropical text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold font-body hover:scale-105 transition-transform shadow-lg"
        >
          Book Now
        </Link>
      </motion.div>
    </section>

    {/* Services Grid */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-4xl text-center mb-16"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
              className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow"
            >
              <div className="w-14 h-14 rounded-full gradient-tropical flex items-center justify-center mx-auto mb-5">
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="text-primary font-body font-semibold hover:underline">
            View All Services →
          </Link>
        </div>
      </div>
    </section>

    {/* Portfolio Preview */}
    <section className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-4xl text-center mb-16"
        >
          Our Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[nails1, nails2, nails3].map((img, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}
              className="overflow-hidden rounded-2xl group"
            >
              <img
                src={img}
                alt={`Nail art ${i + 1}`}
                loading="lazy"
                width={800}
                height={800}
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-block gradient-tropical text-primary-foreground px-6 py-3 rounded-full font-body font-semibold hover:scale-105 transition-transform"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-4xl text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
              className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-tropical-orange text-tropical-orange" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm font-body mb-4 italic">"{t.comment}"</p>
              <p className="font-body font-semibold text-sm">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-tropical py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl text-primary-foreground mb-4">Ready for Beautiful Nails?</h2>
        <p className="font-body text-primary-foreground/80 mb-8 max-w-md mx-auto">
          Book your appointment today and let us bring Caribbean vibes to your fingertips.
        </p>
        <Link
          to="/appointments"
          className="inline-block bg-background text-foreground px-8 py-4 rounded-full font-body font-semibold hover:scale-105 transition-transform"
        >
          Book Your Appointment
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
