import { motion } from "framer-motion";

interface GlowOrbProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const GlowOrb = ({ className = "", size = "md" }: GlowOrbProps) => {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-primary/20 blur-3xl animate-pulse-glow ${sizeClasses[size]} ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
  );
};
