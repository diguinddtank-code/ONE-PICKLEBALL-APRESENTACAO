'use client';

import { useEffect } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import About from '@/components/sections/About';
import Courts from '@/components/sections/Courts';
import Coaches from '@/components/sections/Coaches';
import Experience from '@/components/sections/Experience';
import Gallery from '@/components/sections/Gallery';
import Plans from '@/components/sections/Plans';
import News from '@/components/sections/News';
import BookingCTA from '@/components/sections/BookingCTA';
import Location from '@/components/sections/Location';

export default function Home() {
  useLenis();

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    // Refresh ScrollTrigger after images and fonts load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Robust layout shift detection with debounce to prevent ResizeObserver loops
    let resizeTimeout: NodeJS.Timeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('load', handleLoad);
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <main className="relative w-full overflow-hidden bg-[var(--black)]">
      <Hero />
      <Partners />
      <About />
      <Courts />
      <Coaches />
      <Experience />
      <Gallery />
      <Plans />
      <News />
      <BookingCTA />
      <Location />
    </main>
  );
}
