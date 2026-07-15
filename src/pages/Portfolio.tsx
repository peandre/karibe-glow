import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import nails1 from "@/assets/nails-art-1.jpg";
import nails2 from "@/assets/nails-art-2.jpg";
import nails3 from "@/assets/nails-art-3.jpg";
import pedicure from "@/assets/pedicure.jpg";
import hero from "@/assets/hero-nails.jpg";

const categories = ["All", "Manicure", "Pedicure", "Nail Art", "Acrylics", "Gel Nails"];

const portfolioItems = [
  { img: nails1, title: "Tropical Paradise", category: "Nail Art" },
  { img: nails2, title: "Pink Perfection", category: "Gel Nails" },
  { img: nails3, title: "Caribbean Blooms", category: "Acrylics" },
  { img: pedicure, title: "Spa Day Bliss", category: "Pedicure" },
  { img: hero, title: "Studio Vibes", category: "Manicure" },
  { img: nails1, title: "Floral Dreams", category: "Nail Art" },
  { img: nails2, title: "Coral Study", category: "Gel Nails" },
  { img: nails3, title: "Sunset Set", category: "Acrylics" },
  { img: pedicure, title: "Barefoot Ritual", category: "Pedicure" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Editorial header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-6">
              § Archive — {filtered.length} works on file
            </p>
            <h1 className="display-mega text-foreground">
              The<br /><span className="italic text-primary">archive.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 self-end font-body text-base text-foreground/70 leading-relaxed">
            A living record of tropical iconography, gel discipline
            and quiet colour work — filter through by discipline.
          </p>
        </div>

        {/* Filter row */}
        <div className="border-y border-foreground/15 py-5 mb-10 flex flex-wrap gap-x-8 gap-y-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-[11px] uppercase tracking-editorial transition-colors ${
                activeCategory === cat
                  ? "text-primary underline underline-offset-8 decoration-2"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* True masonry via CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((item, i) => {
            const heights = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[5/6]"];
            return (
              <motion.div
                key={`${item.title}-${i}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                onClick={() => setLightbox(i)}
                className="group break-inside-avoid cursor-pointer relative overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full ${heights[i % heights.length]} object-cover group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors flex items-end p-5">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-background font-display text-2xl leading-none">{item.title}</p>
                    <p className="text-primary font-body text-[10px] uppercase tracking-editorial mt-2">
                      {String(i + 1).padStart(2, "0")} · {item.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/95 z-50 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-background hover:text-primary transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={filtered[lightbox]?.img}
              alt={filtered[lightbox]?.title}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-8 text-background">
              <p className="font-display text-3xl">{filtered[lightbox]?.title}</p>
              <p className="font-body text-[11px] uppercase tracking-editorial text-primary mt-2">
                {filtered[lightbox]?.category}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
