import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const IntroAnimation = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Blue glow background effect */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 1.2], 
              opacity: [0, 0.8, 0.6] 
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Pulsing rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full border border-primary/30 hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 2 + i * 0.5],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2,
                delay: 0.5 + i * 0.3,
                ease: "easeOut",
                repeat: 1,
              }}
            />
          ))}

          {/* Center content */}
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Mouse icon with glow */}
            <motion.div
              className="relative hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Scroll text */}
            <motion.span
              className="text-primary/90 text-lg md:text-2xl font-semibold tracking-[0.35em] uppercase"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ delay: 0.8, duration: 1.4, ease: "easeOut" }}
            >
              Scroll to explore
            </motion.span>

            {/* Animated arrow */}
            <motion.div
              className="flex flex-col items-center mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="origin-top w-px h-20 md:h-32 bg-gradient-to-b from-primary via-primary/80 to-transparent"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Light beam effect */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-0 bg-gradient-to-t from-transparent via-primary to-transparent"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: [0, 0.5, 0] }}
            transition={{ delay: 2.5, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
