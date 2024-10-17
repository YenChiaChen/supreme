import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollEffectContainerProps {
  children: React.ReactNode;
  xSpeed?: number;  // Optional speed for horizontal movement based on scroll
  ySpeed?: number;  // Optional speed for vertical movement based on scroll
  className?: string; // Optional className for custom positioning or styling
}

const ScrollEffectContainer: React.FC<ScrollEffectContainerProps> = ({
  children,
  xSpeed = 1,      // Default horizontal speed multiplier
  ySpeed = 1,      // Default vertical speed multiplier
  className = "",  // Default empty className
}) => {
  const ref = useRef(null);

  // Hook to track the scroll progress within the reference container
  const { scrollYProgress } = useScroll({
    target: ref,   // Monitor the scrolling for the referenced container
    offset: ["end start", "start end"], // Adjust trigger zone
  });

  // Map scroll progress to horizontal and vertical movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -100 * xSpeed]); // Adjust x based on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * ySpeed]);  // Adjust y based on scroll

  return (
    <div ref={ref} className={`overflow-hidden relative w-full ${className}`}>
      <motion.div
        style={{ x, y }} // Bind x and y movement to scroll behavior
        className="absolute whitespace-nowrap"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollEffectContainer;
