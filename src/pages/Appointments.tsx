import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Basic Manicure",
  "Gel Polish Manicure",
  "Deluxe Pedicure",
  "Acrylic Full Set",
  "Acrylic Fill",
  "Tropical Nail Art",
  "Gel Extensions",
  "Nail Repair",
  "Other",
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
    await new Promise((r) => setTimeout(r, 900));
    toast({ title: "Message sent", description: "We'll be in touch shortly." });
    setForm({ name: "", email: "", service: "", message: "" });
    setLoading(false);
  };

  const inputClass =
    "w-full bg-transparent border-b border-foreground/30 py-3 px-1 font-body text-base outline-none focus:border-primary transition-colors placeholder:text-foreground/30";

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-6">
              § Contact — Reserve a seat
            </p>
            <h1 className="display-mega text-foreground">
              Say<br /><span className="italic text-primary">hello.</span>
            </h1>
          </div>
          <p className="lg:col-span-4 self-end font-body text-base text-foreground/70 leading-relaxed">
            Tell us what you have in mind. We reply within a day and
            confirm your slot personally — no bots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form — 7 cols */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 space-y-10"
          >
            <div>
              <label className="block font-body text-[11px] uppercase tracking-editorial text-primary mb-3">
                01 · Your name *
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="Isabella Martínez"
              />
            </div>
            <div>
              <label className="block font-body text-[11px] uppercase tracking-editorial text-primary mb-3">
                02 · Email *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block font-body text-[11px] uppercase tracking-editorial text-primary mb-3">
                03 · Service of interest
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputClass}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-body text-[11px] uppercase tracking-editorial text-primary mb-3">
                04 · Tell us more *
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Preferred date, design ideas, questions…"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-editorial font-semibold hover:bg-primary transition-colors disabled:opacity-50"
            >
              {loading ? "Sending…" : "Send message"}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.form>

          {/* Info panel — 5 cols */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="border-t border-foreground/15">
              {[
                { label: "Phone", value: "+1 787 123 4567" },
                { label: "Email", value: "info@karibenails.com" },
                { label: "Studio", value: "San Juan, Puerto Rico" },
                { label: "Hours", value: "Mon–Fri 9am–7pm · Sat 10am–6pm" },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-3 py-5 border-b border-foreground/15">
                  <span className="font-body text-[11px] uppercase tracking-editorial text-primary">
                    {row.label}
                  </span>
                  <span className="col-span-2 font-display text-xl text-foreground leading-tight">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Booksy panel */}
            <div className="mt-10 bg-secondary text-secondary-foreground p-8">
              <p className="font-body text-[11px] uppercase tracking-editorial text-primary mb-4">
                Instant booking
              </p>
              <h3 className="font-display text-3xl leading-tight mb-4">
                Prefer to pick<br /><span className="italic">the slot yourself?</span>
              </h3>
              <p className="font-body text-sm text-secondary-foreground/70 mb-6">
                Skip the form and reserve straight from our live calendar on Booksy.
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 text-[11px] uppercase tracking-editorial font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Open Booksy
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="mt-10 overflow-hidden border border-foreground/15">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60903.42373!2d-66.1!3d18.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036856dc2e01f7%3A0x24d6a3e9292a2c89!2sSan%20Juan%2C%20Puerto%20Rico!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="260"
                style={{ border: 0, filter: "grayscale(0.4) contrast(1.05)" }}
                loading="lazy"
                title="Location"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
