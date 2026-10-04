import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { premiumEase } from '../../constants/animation';

/**
 * FadeIn: Smooth entrance animation when scrolled into view
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className = '',
  direction = 'up',
  once = true,
  ...props
}) {
  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: yOffset };
      case 'down': return { opacity: 0, y: -yOffset };
      case 'left': return { opacity: 0, x: yOffset };
      case 'right': return { opacity: 0, x: -yOffset };
      case 'none': return { opacity: 0 };
      default: return { opacity: 0, y: yOffset };
    }
  };

  const getTarget = () => {
    switch (direction) {
      case 'up':
      case 'down': return { opacity: 1, y: 0 };
      case 'left':
      case 'right': return { opacity: 1, x: 0 };
      case 'none': return { opacity: 1 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={getTarget()}
      viewport={{ once, margin: '-50px' }}
      transition={{ duration, delay, ease: premiumEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer: Parent container for staggered children reveals
 */
export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0.1,
  className = '',
  once = true,
  ...props
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-50px' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem: Child element for staggered animations
 */
export function StaggerItem({
  children,
  className = '',
  yOffset = 20,
  ...props
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: premiumEase
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}

/**
 * SpotlightCard: Interactive card with mouse-following radial spotlight glow
 * As seen on Linear, Vercel, and Next.js sites
 */
export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(6, 182, 212, 0.14)',
  borderColor = 'rgba(6, 182, 212, 0.35)',
  size = 400,
  onClick,
  as: Component = 'div',
  ...props
}) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: -size, y: -size });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: -size, y: -size });
  };

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden group transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${size}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {/* Dynamic Border Illumination */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${size / 1.5}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${borderColor}, transparent 70%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </Component>
  );
}

/**
 * TiltCard: 3D perspective spring tilt on mouse move
 * Perfect for Developer Spec Terminal and key feature cards
 */
export function TiltCard({
  children,
  className = '',
  perspective = 1000,
  maxRotation = 8,
  scaleOnHover = 1.01,
  ...props
}) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for realistic mechanical return
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxRotation, -maxRotation]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxRotation, maxRotation]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: perspective,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: scaleOnHover }}
      transition={{ scale: { duration: 0.25 } }}
      className={`relative ${className}`}
      {...props}
    >
      <div style={{ transform: 'translateZ(15px)' }}>{children}</div>
    </motion.div>
  );
}

/**
 * CountUp: Smooth numerical ticker when scrolled into view
 */
export function CountUp({
  value,
  duration = 1.8,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(() => {
    const num = parseFloat(value);
    return isNaN(num) ? String(value) : '0';
  });

  useEffect(() => {
    if (!isInView) return;

    const target = typeof value === 'number' ? value : parseFloat(value);
    if (isNaN(target)) return;

    let startTime = null;
    let animationFrame;

    const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);
      const current = easedProgress * target;

      setDisplayValue(current.toFixed(decimals));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(target.toFixed(decimals));
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

/**
 * Typewriter: Realistic cycling text with typing and backspacing
 */
export function Typewriter({
  words = [],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 2200,
  className = '',
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex % words.length];

    let timer;

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, typingSpeed + (Math.random() * 30 - 15));
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Transition to next word on timer
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 50);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  const currentWord = words[wordIndex % words.length] || '';
  const displayedText = currentWord.substring(0, charIndex);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      <span className="w-[2px] h-[1.1em] ml-1 bg-cyan-400 inline-block animate-pulse align-middle" />
    </span>
  );
}

/**
 * Interactive magnetic wrapper for buttons
 */
export function MagneticButton({
  children,
  className = '',
  strength = 15,
  ...props
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) / (width / 2);
    const deltaY = (e.clientY - centerY) / (height / 2);
    x.set(deltaX * strength);
    y.set(deltaY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
