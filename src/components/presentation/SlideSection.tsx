import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SlideSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const SlideSection = ({ children, className = "", delay = 0 }: SlideSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section ref={ref} className={`slide-section relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full flex items-center justify-center py-10 md:py-0"
      >
        {children}
      </motion.div>
    </section>
  );
};
