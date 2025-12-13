
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Layout, Server, BrainCircuit, CreditCard, ChevronDown } from "lucide-react";

interface TechItem {
  name: string;
  description: string;
  logo: string;
}

interface TechCategory {
  id: string;
  title: string;
  icon: JSX.Element;
  color: string;
  description: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend (Visuals)",
    icon: <Layout className="w-8 h-8" />,
    color: "text-blue-400",
    description: "The user interface your customers interact with. Fast, responsive, and beautiful.",
    items: [
      { name: "React", description: "Interactive UI engine", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" },
      { name: "Next.js", description: "SEO & Performance framework", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" },
      { name: "Tailwind CSS", description: "Modern styling system", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "TypeScript", description: "Type-safe code", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" }
    ]
  },
  {
    id: "backend",
    title: "Backend (Engine)",
    icon: <Server className="w-8 h-8" />,
    color: "text-purple-400",
    description: "The powerful server-side logic handling data, security, and performance.",
    items: [
      { name: "Node.js", description: "High-performance server", logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png" },
      { name: "PostgreSQL", description: "Secure database", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
      { name: "Supabase", description: "Realtime backend platform", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
      { name: "Docker", description: "Containerization", logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png" }
    ]
  },
  {
    id: "ai",
    title: "AI Engine",
    icon: <BrainCircuit className="w-8 h-8" />,
    color: "text-emerald-400",
    description: "Intelligent layers for recommendations, automation, and natural language.",
    items: [
      { name: "OpenAI API", description: "GPT-4 & Embeddings", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      { name: "Python", description: "ML & Data Science", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
      { name: "LangChain", description: "AI Orchestration", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "Pinecone", description: "Vector Database for AI", logo: "https://seeklogo.com/images/P/pinecone-logo-262A86088B-seeklogo.com.png" }
    ]
  },
  {
    id: "payment",
    title: "Payment Processing",
    icon: <CreditCard className="w-8 h-8" />,
    color: "text-amber-400",
    description: "Secure, compliant global payment infrastructure for monetization.",
    items: [
      { name: "Stripe", description: "Payments infrastructure", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
      { name: "Webhooks", description: "Realtime transaction events", logo: "https://www.svgrepo.com/show/331308/webhooks.svg" },
      { name: "PCI DSS", description: "Security Compliance Level 1", logo: "https://www.svgrepo.com/show/354160/pci.svg" }
    ]
  }
];

export const TechStack = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      {techCategories.map((category) => (
        <motion.div
          key={category.id}
          className="relative group h-[300px]"
          onMouseEnter={() => setHoveredId(category.id)}
          onMouseLeave={() => setHoveredId(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Card Background */}
          <div className={`h-full w-full glass-card border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ${hoveredId === category.id ? 'blur-sm scale-95 opacity-50' : 'hover:border-primary/30'}`}>
            <div className={`w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${category.color} transition-transform duration-500 group-hover:scale-110`}>
              {category.icon}
            </div>
            <h3 className="text-2xl font-sora font-bold mb-3">{category.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{category.description}</p>

            <motion.div
              className="mt-6 text-primary/50 flex flex-col items-center gap-2 animate-bounce"
              animate={{ opacity: hoveredId === category.id ? 0 : 1 }}
            >
              <span className="text-xs uppercase tracking-widest">Hover to explore</span>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Hover Overlay Content */}
          <AnimatePresence>
            {hoveredId === category.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 z-20 glass-card bg-black/90 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 flex flex-col justify-center overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  {category.icon}
                </div>

                <h4 className={`text-sm font-bold uppercase tracking-widest mb-6 ${category.color}`}>Inside the Box</h4>

                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 p-1.5 flex items-center justify-center shrink-0">
                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
