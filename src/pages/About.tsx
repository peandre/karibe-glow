import { motion } from "framer-motion";
import karinaImg from "@/assets/karina-artist.jpg";
import nails1 from "@/assets/nails-art-1.jpg";
import nails2 from "@/assets/nails-art-2.jpg";

const values = [
  { n: "01", title: "Excellence", desc: "Only premium products. Only the current techniques." },
  { n: "02", title: "Care", desc: "Every client is greeted, listened to and looked after — no exceptions." },
  { n: "03", title: "Creativity", desc: "From minimalist to maximalist, we translate what you bring into something wearable." },
  { n: "04", title: "Community", desc: "Ten years, one neighbourhood. San Juan raised us and we haven't forgotten." },
];

const About = () => (
  <div className="min-h-screen pt-32 bg-background">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        <div className="lg:col-span-8">
          <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-6">
            § About — Since 2015
          </p>
          <h1 className="display-mega text-foreground">
            The<br /><span className="italic text-primary">story.</span>
          </h1>
        </div>
      </div>

      {/* Bio — zigzag / asymmetric */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={karinaImg} alt="Karina, nail artist" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 flex items-center justify-between font-body text-[10px] uppercase tracking-editorial text-foreground/50">
              <span>Karina · Founder</span>
              <span>Portrait Nº 001</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-6">
              Meet Karina
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-none mb-10">
              A quiet<br /><span className="italic">obsession with<br />colour.</span>
            </h2>
            <div className="space-y-6 font-body text-lg text-foreground/70 leading-relaxed">
              <p>
                Karibe Nails is run by Karina, a passionate nail artist with more than a
                decade of experience in Puerto Rico, specialising in tropical-themed designs
                that capture the vibrant, unhurried spirit of the Caribbean.
              </p>
              <p>
                What began as a hobby quickly turned into a calling. After formal training
                and years of perfecting her craft, Karina opened Karibe to share a very
                specific point of view with the San Juan community.
              </p>
              <p className="font-display text-2xl text-foreground italic leading-tight">
                “Every set of nails is a canvas. Every client walks out wearing a small,
                personal work of art.”
              </p>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-4 mt-14 border-t border-foreground/15 pt-10">
              {[
                { k: "10+", v: "Years of craft" },
                { k: "2K", v: "Clients seen" },
                { k: "1", v: "Woman, one atelier" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-4xl text-primary leading-none">{s.k}</p>
                  <p className="font-body text-[10px] uppercase tracking-editorial text-foreground/50 mt-3">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values — numbered list, alternating alignment */}
      <section className="mb-32">
        <div className="mb-16">
          <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">
            § What we stand on
          </p>
          <h2 className="font-display text-6xl leading-none">
            Four<br /><span className="italic">values.</span>
          </h2>
        </div>
        <div className="border-t border-foreground/15">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-12 gap-4 items-baseline py-10 border-b border-foreground/15 ${
                i % 2 === 1 ? "md:pl-24" : ""
              }`}
            >
              <span className="col-span-2 md:col-span-1 font-body text-[11px] tracking-editorial text-primary">
                {v.n}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-display text-4xl md:text-5xl text-foreground leading-none">
                {v.title}
              </h3>
              <p className="col-span-12 md:col-span-6 font-body text-base text-foreground/60 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Photo pair */}
      <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-[4/5] overflow-hidden">
          <img src={nails1} alt="Nail detail" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-[4/5] overflow-hidden md:mt-24">
          <img src={nails2} alt="Studio work" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">§ Visit</p>
            <h2 className="font-display text-5xl leading-none">Find us in <span className="italic">San Juan.</span></h2>
          </div>
        </div>
        <div className="overflow-hidden border border-foreground/15">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60903.42373!2d-66.1!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036856dc2e01f7%3A0x24d6a3e9292a2c89!2sSan%20Juan%2C%20Puerto%20Rico!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="420"
            style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
            loading="lazy"
            title="Karibe Nails location"
          />
        </div>
      </section>
    </div>
  </div>
);

export default About;
