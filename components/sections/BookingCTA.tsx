'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import MagneticButton from '@/components/ui/MagneticButton';
import { PickleballPaddle, PickleballBall } from '@/components/ui/PickleballIcons';

export default function BookingCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !headlineRef.current) return;

    const words = Array.from(headlineRef.current.children);

    gsap.fromTo(words,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="booking" className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[var(--orange)] py-40 text-black">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
      
      <div className="pointer-events-none absolute left-10 top-10 z-0 opacity-10 md:opacity-20">
        <PickleballPaddle className="h-48 w-48 -rotate-45 text-black" />
      </div>
      <div className="pointer-events-none absolute bottom-10 right-20 z-0 opacity-10 md:opacity-20">
        <PickleballBall className="h-32 w-32 text-black" />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center px-6 text-center md:px-12">
        <h2 ref={headlineRef} className="mb-8 flex flex-wrap justify-center gap-x-4 font-sans text-7xl leading-[0.85] font-bold tracking-tighter md:text-[10vw]" style={{ fontFamily: 'var(--font-bebas)' }}>
          <span className="inline-block">PRONTO</span>
          <span className="inline-block">PRA</span>
          <span className="inline-block">JOGAR?</span>
        </h2>
        <p className="mb-12 max-w-2xl font-sans text-xl font-medium text-black/80 md:text-2xl">
          Reserve sua quadra em menos de 2 minutos.
        </p>
        <MagneticButton variant="primary" className="bg-black text-white hover:bg-[var(--charcoal)] hover:text-[var(--orange)]">
          Agendar Agora →
        </MagneticButton>
      </div>
    </section>
  );
}
