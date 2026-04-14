import { motion } from "framer-motion";
import { Award, Heart, Palette, Users } from "lucide-react";
import karinaImg from "@/assets/karina-artist.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  { icon: Award, title: "Excellence", desc: "We use only premium products and stay on top of the latest trends." },
  { icon: Heart, title: "Care", desc: "Every client is treated with warmth and personalized attention." },
  { icon: Palette, title: "Creativity", desc: "From tropical to minimalist, we bring your vision to life." },
  { icon: Users, title: "Community", desc: "Proudly serving the San Juan community for over 10 years." },
];

const About = () => (
  <div className="min-h-screen pt-20">
    {/* Hero */}
    <section className="gradient-soft py-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display text-5xl text-center mb-6"
        >
          About <span className="text-gradient-tropical">Karibe Nails</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
          className="text-muted-foreground text-center font-body max-w-2xl mx-auto"
        >
          Caribbean-inspired nail artistry with 10+ years of passion and expertise.
        </motion.p>
      </div>
    </section>

    {/* Bio */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src={karinaImg}
              alt="Karina, nail artist"
              loading="lazy"
              width={800}
              height={1000}
              className="rounded-2xl shadow-[var(--shadow-elevated)] w-full"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
          >
            <h2 className="font-display text-3xl mb-6">Meet Karina</h2>
            <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
              <p>
                Karibe Nails is run by Karina, a passionate nail artist with over 10 years of experience
                in Puerto Rico, specializing in tropical-themed designs that capture the vibrant spirit of
                the Caribbean.
              </p>
              <p>
                From a young age, Karina discovered her love for art and beauty. What started as a hobby
                quickly became a calling. After formal training and years of perfecting her craft, she
                opened Karibe Nails to share her unique style with the San Juan community.
              </p>
              <p>
                Every set of nails is a canvas, and every client walks away with a personalized work of art
                that reflects their personality and style.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-4xl text-center mb-16"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}
              className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-card)]"
            >
              <div className="w-12 h-12 rounded-full gradient-tropical flex items-center justify-center mx-auto mb-4">
                <v.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-4xl text-center mb-10"
        >
          Find Us
        </motion.h2>
        <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60903.42373!2d-66.1!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036856dc2e01f7%3A0x24d6a3e9292a2c89!2sSan%20Juan%2C%20Puerto%20Rico!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            title="Karibe Nails location"
          />
        </div>
      </div>
    </section>
  </div>
);

export default About;
