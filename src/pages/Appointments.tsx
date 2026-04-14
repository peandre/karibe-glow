import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const serviceOptions = [
  "Basic Manicure", "Gel Polish Manicure", "Deluxe Pedicure",
  "Acrylic Full Set", "Acrylic Fill", "Tropical Nail Art",
  "Gel Extensions", "Nail Repair", "Other",
];

const Appointments = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message sent! 🌺", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", service: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="gradient-soft py-24">
        <div className="container mx-auto px-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="font-display text-5xl text-center mb-6">
            Book an <span className="text-gradient-tropical">Appointment</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
            className="text-muted-foreground text-center font-body max-w-xl mx-auto"
          >
            Get in touch or book your next visit. We'd love to hear from you!
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-display text-3xl mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-body font-medium mb-1">Name *</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-muted rounded-xl px-4 py-3 font-body text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-muted rounded-xl px-4 py-3 font-body text-sm outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium mb-1">Service</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-muted rounded-xl px-4 py-3 font-body text-sm outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-body font-medium mb-1">Message *</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-muted rounded-xl px-4 py-3 font-body text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us what you'd like..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="gradient-tropical text-primary-foreground px-8 py-3 rounded-full font-body font-semibold hover:scale-105 transition-transform disabled:opacity-50 flex items-center gap-2"
                >
                  <Send size={16} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
            >
              <h2 className="font-display text-3xl mb-8">Contact Info</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "+1-787-123-4567" },
                  { icon: Mail, label: "info@karibenails.com" },
                  { icon: MapPin, label: "San Juan, Puerto Rico" },
                  { icon: Clock, label: "Mon-Fri 9am-7pm · Sat 10am-6pm" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full gradient-tropical flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary-foreground" />
                    </div>
                    <span className="font-body text-sm">{label}</span>
                  </div>
                ))}
              </div>

              {/* Booksy CTA */}
              <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-xl mb-3">Online Booking</h3>
                <p className="text-muted-foreground text-sm font-body mb-4">
                  Book your appointment instantly through our online booking system.
                </p>
                <a
                  href="#"
                  className="inline-block gradient-warm text-primary-foreground px-6 py-3 rounded-full font-body font-semibold text-sm hover:scale-105 transition-transform"
                >
                  Book on Booksy →
                </a>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60903.42373!2d-66.1!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036856dc2e01f7%3A0x24d6a3e9292a2c89!2sSan%20Juan%2C%20Puerto%20Rico!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
