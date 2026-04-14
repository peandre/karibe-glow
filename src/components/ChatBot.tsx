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
  return "Thanks for reaching out! For specific questions, please call us at +1-787-123-4567 or check our Services page. 🌺";
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "¡Hola! 🌺 Welcome to Karibe Nails! How can I help you today?", isBot: true },
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
        <div className="mb-3 w-80 bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          <div className="gradient-tropical p-4 flex items-center justify-between">
            <span className="text-primary-foreground font-body font-semibold text-sm">Karibe Nails Chat</span>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
              <X size={18} />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-xs font-body ${
                    m.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message..."
              className="flex-1 bg-muted rounded-full px-3 py-2 text-xs font-body outline-none focus:ring-1 focus:ring-primary"
            />
            <button onClick={send} className="bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition">
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="gradient-tropical p-4 rounded-full shadow-lg hover:scale-110 transition-transform text-primary-foreground"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatBot;
