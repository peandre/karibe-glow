import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import nails1 from "@/assets/nails-art-1.jpg";
import nails2 from "@/assets/nails-art-2.jpg";
import nails3 from "@/assets/nails-art-3.jpg";
import pedicure from "@/assets/pedicure.jpg";
import hero from "@/assets/hero-nails.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const categories = ["All", "Manicure", "Pedicure", "Nail Art", "Acrylics", "Gel Nails"];

const portfolioItems = [
  { img: nails1, title: "Tropical Paradise", category: "Nail Art" },
  { img: nails2, title: "Pink Perfection", category: "Gel Nails" },
  { img: nails3, title: "Caribbean Blooms", category: "Acrylics" },
  { img: pedicure, title: "Spa Day Bliss", category: "Pedicure" },
  { img: hero, title: "Studio Vibes", category: "Manicure" },
  { img: nails1, title: "Floral Dreams", category: "Nail Art" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-soft py-24">
        <div className="container mx-auto px-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-5xl text-center mb-6">
            Our <span className="text-gradient-tropical">Portfolio</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
            className="text-muted-foreground text-center font-body max-w-xl mx-auto"
          >
            Browse our collection of Caribbean-inspired nail designs.
          </motion.p>
        </div>
      </section>

      {/* Filters & Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all ${
                  activeCategory === cat
                    ? "gradient-tropical text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                layout
                initial="hidden"
                animate="visible"
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.4, delay: i * 0.05 } } }}
                className="overflow-hidden rounded-2xl group cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-background font-body font-semibold text-sm">{item.title}</p>
                      <p className="text-background/70 font-body text-xs">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-background hover:text-primary" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={filtered[lightbox]?.img}
              alt={filtered[lightbox]?.title}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
