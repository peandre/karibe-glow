import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";
import nails1 from "@/assets/nails-art-1.jpg";
import nails2 from "@/assets/nails-art-2.jpg";
import nails3 from "@/assets/nails-art-3.jpg";
import pedicure from "@/assets/pedicure.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const servicesList = [
  { title: "Basic Manicure", price: "$25", duration: "30 min", desc: "Classic manicure with nail shaping, cuticle care, and premium polish.", img: nails2 },
  { title: "Gel Polish Manicure", price: "$35", duration: "45 min", desc: "Long-lasting gel polish with a high-shine finish that lasts up to 2 weeks.", img: nails1 },
  { title: "Deluxe Pedicure", price: "$40", duration: "45 min", desc: "Relaxing pedicure with exfoliation, massage, and your choice of polish.", img: pedicure },
  { title: "Acrylic Full Set", price: "$50", duration: "60 min", desc: "Full acrylic nail extensions shaped and styled to perfection.", img: nails3 },
  { title: "Acrylic Fill", price: "$35", duration: "45 min", desc: "Maintenance fill for existing acrylic nails to keep them looking fresh.", img: nails2 },
  { title: "Tropical Nail Art", price: "$15+", duration: "Varies", desc: "Custom tropical-themed nail art designs inspired by Caribbean beauty.", img: nails1 },
  { title: "Gel Extensions", price: "$55", duration: "75 min", desc: "Lightweight gel nail extensions for natural-looking length and strength.", img: nails3 },
  { title: "Nail Repair", price: "$10", duration: "15 min", desc: "Quick repair for broken or damaged nails to get you back to beautiful.", img: nails2 },
];

const faqs = [
  { q: "Do I need an appointment?", a: "Walk-ins are welcome, but we recommend booking to guarantee your preferred time slot." },
  { q: "What products do you use?", a: "We use premium, salon-quality products from top brands that are safe, long-lasting, and vibrant." },
  { q: "How long do gel nails last?", a: "Gel nails typically last 2-3 weeks with proper care. We recommend a fill every 2-3 weeks for acrylics." },
  { q: "Do you offer group bookings?", a: "Yes! We welcome bridal parties, birthday groups, and other celebrations. Contact us for group rates." },
  { q: "Is parking available?", a: "Yes, we have convenient street parking and a small lot nearby our San Juan location." },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-soft py-24">
        <div className="container mx-auto px-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-5xl text-center mb-6">
            Our <span className="text-gradient-tropical">Services</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
            className="text-muted-foreground text-center font-body max-w-xl mx-auto"
          >
            From classic manicures to Caribbean-inspired nail art, we have something for everyone.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesList.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: (i % 4) * 0.1 } } }}
                className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow group"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg">{s.title}</h3>
                    <span className="text-primary font-body font-bold text-lg">{s.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs font-body mb-3">
                    <Clock size={12} /> {s.duration}
                  </div>
                  <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 gradient-soft">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-display text-4xl text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.05 } } }}
                className="bg-card rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 font-body font-medium text-sm text-left"
                >
                  {f.q}
                  {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm font-body">
                    {f.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-tropical py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl text-primary-foreground mb-6">Ready to Get Started?</h2>
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
};

export default Services;
