'use client';

import { useRef, useState, useEffect } from 'react';
import { HTMLMotionProps, motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export default function MagneticButton({ variant = 'primary', children, className, ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest transition-all duration-300 group";
  
  const variants = {
    primary: "bg-[var(--orange)] text-white hover:shadow-[0_0_20px_rgba(232,64,10,0.4)]",
    outline: "border border-[var(--orange)] text-white hover:text-black",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className={`absolute inset-0 z-0 h-full w-full scale-0 rounded-full transition-transform duration-300 ease-out group-hover:scale-150 ${variant === 'primary' ? 'bg-[var(--orange-dark)]' : 'bg-[var(--orange)]'}`} />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
