'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import CourtCard from '@/components/ui/CourtCard';
import { COURTS } from '@/lib/constants';

export default function Courts() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const cards = gsap.utils.toArray(gridRef.current.children);

    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="courts" className="relative flex w-full flex-col justify-center bg-[var(--black)] py-24 md:py-32">
      <div className="container mx-auto mb-16 px-6 md:px-12">
        <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
          Nossas Quadras
        </span>
        <h2 className="font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white sm:text-6xl md:text-8xl" style={{ fontFamily: 'var(--font-bebas)' }}>
          ONDE A PARTIDA ACONTECE
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div ref={gridRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COURTS.map((court, index) => (
            <CourtCard key={index} name={court.name} features={court.features} gradient={court.gradient} />
          ))}
        </div>
      </div>
    </section>
  );
}
