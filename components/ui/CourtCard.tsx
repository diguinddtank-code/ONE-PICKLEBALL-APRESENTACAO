'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface CourtCardProps {
  name: string;
  features: string[];
  gradient: string;
}

export default function CourtCard({ name, features, gradient }: CourtCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotation.x, rotateY: rotation.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-8 shadow-2xl md:h-[500px]`}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(circle at ${rotation.y * 10 + 50}% ${rotation.x * 10 + 50}%, white, transparent)`,
        }}
      />
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
        <h3 className="mb-4 font-sans text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-bebas)' }}>
          {name}
        </h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-[var(--off-white)]">
              <CheckCircle2 className="mr-2 h-4 w-4 text-[var(--orange)]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 h-1 bg-[var(--orange)]"
      />
    </motion.div>
  );
}
