'use client';

import { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LearnPickleball from '@/components/sections/LearnPickleball';

export default function LearnPage() {
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
      <LearnPickleball />
    </main>
  );
}
