'use client';

import { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import News from '@/components/sections/News';

export default function NewsPage() {
  useLenis();

  useEffect(() => {
    // Refresh ScrollTrigger after load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[var(--black)] pt-20">
      <News />
    </main>
  );
}
