'use client';

import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';
import { PickleballBall } from '@/components/ui/PickleballIcons';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0) scale(${isHovering ? 1.5 : 1}) rotate(${x}deg)`;
      cursorRef.current.style.color = isHovering ? 'var(--orange)' : 'white';
    }
  }, [x, y, isHovering]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-8 w-8 items-center justify-center mix-blend-difference transition-transform duration-150 ease-out md:flex"
      style={{ willChange: 'transform' }}
    >
      <PickleballBall className="h-full w-full" />
    </div>
  );
}
