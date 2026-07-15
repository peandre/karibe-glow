import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
}

const responses: Record<string, string> = {
  price: "Our services range from $10 (nail repair) to $55 (gel extensions). Check our Services page for full pricing!",
  book: "You can book through our Appointments page or call us at +1-787-123-4567. We also accept walk-ins!",
  service: "We offer manicures, pedicures, acrylics, gel nails, nail art, and repairs. Visit our Services page for details!",
  location: "We're located in San Juan, Puerto Rico. Open Mon-Fri 9am-7pm, Sat 10am-6pm.",
  hours: "Mon-Fri: 9am-7pm, Saturday: 10am-6pm. Closed on Sundays.",
  contact: "Call us at +1-787-123-4567 or email info@karibenails.com. You can also fill out the form on our Contact page!",
};

function getReply(msg: string): string {
  const lower = msg.toLowerCase();
  for (const [key, val] of Object.entries(responses)) {
    if (lower.includes(key)) return val;
  }
  return "Thanks for reaching out. For anything specific, call us at +1-787-123-4567 or visit the Services page.";
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hola. Welcome to Karibe Nails — how can we help you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((m) => [...m, { text: userMsg, isBot: false }]);
    setTimeout(() => {
      setMessages((m) => [...m, { text: getReply(userMsg), isBot: true }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-80 bg-background border border-foreground/10 shadow-editorial overflow-hidden">
          <div className="bg-secondary p-4 flex items-center justify-between">
            <div>
              <p className="text-secondary-foreground/60 font-body text-[10px] uppercase tracking-editorial">Live chat</p>
              <span className="text-secondary-foreground font-display text-lg leading-none">Karibe<span className="text-primary">.</span></span>
            </div>
            <button onClick={() => setOpen(false)} className="text-secondary-foreground/80 hover:text-primary transition">
              <X size={18} />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-4 space-y-3 bg-background">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 text-xs font-body leading-relaxed ${
                    m.isBot
                      ? "bg-muted text-foreground rounded-tr-lg rounded-br-lg rounded-bl-lg"
                      : "bg-primary text-primary-foreground rounded-tl-lg rounded-bl-lg rounded-br-lg"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-foreground/10 flex gap-2 bg-background">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="flex-1 bg-muted px-3 py-2 text-xs font-body outline-none focus:ring-1 focus:ring-primary"
            />
            <button onClick={send} className="bg-primary text-primary-foreground p-2 hover:bg-foreground transition">
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary p-4 shadow-coral hover:bg-foreground transition-colors text-primary-foreground"
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
};

export default ChatBot;
