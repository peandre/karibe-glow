import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const servicesList = [
  { n: "01", title: "Manicura rusa — cortas", price: "$45", duration: "Hard / Builder gel", desc: "Manicura rusa con hard o builder gel, longitud corta. Acabado impecable de larga duración." },
  { n: "02", title: "Manicura rusa — medianas", price: "$55", duration: "Hard / Builder gel", desc: "Manicura rusa con hard o builder gel, longitud mediana. Forma y color a tu medida." },
  { n: "03", title: "Manicura rusa — largas", price: "$60", duration: "Hard / Builder gel", desc: "Manicura rusa con hard o builder gel, longitud larga. Máxima presencia y resistencia." },
  { n: "04", title: "MANicure", price: "$25", duration: "Classic", desc: "Manicura clásica con limado, cuidado de cutícula y esmaltado tradicional." },
  { n: "05", title: "Pedicura", price: "$60", duration: "Incluye color en gel", desc: "Pedicura completa que incluye esmaltado en gel para un acabado duradero." },
  { n: "06", title: "Extensión", price: "$65+", duration: "Gel tips o forms", desc: "Extensiones con gel tips o forms, moldeadas para lograr la longitud deseada." },
  { n: "07", title: "Esmaltado gel en pies", price: "$25", duration: "Incluye limpieza de cutícula", desc: "Esmaltado gel en pies con limpieza de cutícula incluida." },
  { n: "08", title: "Broken nail", price: "$3+", duration: "Quick fix", desc: "Reparación rápida de una uña rota o dañada." },
  { n: "09", title: "Remoción", price: "$10", duration: "Trabajo externo", desc: "Remoción de trabajo no realizado por Karibe Nails." },
  { n: "10", title: "Nail art", price: "Varía", duration: "Add-ons", desc: "Diseños personalizados a mano. Los precios varían según el diseño o add-ons." },
];

const faqs = [
  { q: "Do I need an appointment?", a: "Walk-ins are welcome but booking guarantees your preferred time slot." },
  { q: "What products do you use?", a: "Premium salon-quality gels, acrylics and polishes chosen for longevity and pigment." },
  { q: "How long do gel nails last?", a: "Two to three weeks with proper care. We recommend a fill every 2–3 weeks for acrylics." },
  { q: "Do you offer group bookings?", a: "Yes — bridal parties, birthdays and other celebrations. Contact us for group rates." },
  { q: "Is parking available?", a: "Street parking and a small nearby lot are available at our San Juan location." },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-6">
              § Services — Menu No. 01
            </p>
            <h1 className="display-mega text-foreground">
              The<br /><span className="italic text-primary">menu.</span>
            </h1>
          </div>
          <p className="lg:col-span-5 self-end font-body text-base text-foreground/70 leading-relaxed">
            Eight disciplines, one obsession with precision. Prices are honest,
            times are realistic. Ask us anything.
          </p>
        </div>

        {/* Services list — editorial */}
        <div className="border-t border-foreground/15">
          {servicesList.map((s) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="group grid grid-cols-12 gap-4 items-center py-8 border-b border-foreground/15 hover:bg-primary/5 transition-colors px-2"
            >
              <span className="col-span-2 md:col-span-1 font-body text-[11px] tracking-editorial text-primary">
                {s.n}
              </span>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors leading-none">
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

        {/* FAQ */}
        <section className="py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-4">
              <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">
                § FAQ
              </p>
              <h2 className="font-display text-6xl leading-none">
                In case<br /><span className="italic">you wondered.</span>
              </h2>
            </div>
          </div>
          <div className="border-t border-foreground/15">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="border-b border-foreground/15">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between py-6 px-2 text-left group hover:bg-primary/5 transition-colors"
                  >
                    <span className={`font-display text-2xl md:text-3xl transition-colors ${open ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                      {f.q}
                    </span>
                    {open ? <Minus size={22} className="text-primary" /> : <Plus size={22} className="text-foreground/50" />}
                  </button>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-2 pb-8"
                    >
                      <p className="font-body text-base text-foreground/70 leading-relaxed max-w-2xl">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-foreground/15">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <h2 className="font-display text-5xl md:text-6xl leading-none">
              Pick your<br /><span className="italic text-primary">appointment.</span>
            </h2>
            <Link
              to="/appointments"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 text-[11px] uppercase tracking-editorial font-semibold hover:bg-primary transition-colors"
            >
              Book now
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
