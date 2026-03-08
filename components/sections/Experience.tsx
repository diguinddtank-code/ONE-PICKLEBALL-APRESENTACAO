'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { Dumbbell, Smartphone, Award, Coffee, Activity, Trophy } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '@/lib/constants';
import { PickleballCourt } from '@/components/ui/PickleballIcons';

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Smartphone,
  Award,
  Coffee,
  Activity,
  Trophy,
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !gridRef.current) return;

    const items = gsap.utils.toArray(gridRef.current.children);

    gsap.fromTo(
      items,
      { y: 50, opacity: 0 },
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
    <section ref={containerRef} id="experience" className="relative overflow-hidden bg-black py-32 text-[var(--off-white)]">
      <div className="pointer-events-none absolute -left-32 top-1/2 z-0 -translate-y-1/2 opacity-5">
        <PickleballCourt className="h-[800px] w-[400px] text-white" />
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
        <span className="font-sans text-[30vw] font-bold tracking-tighter text-white select-none" style={{ fontFamily: 'var(--font-bebas)' }}>
          ONE
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="mb-24 text-center">
          <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
            Por que a One?
          </span>
          <h2 className="font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white sm:text-6xl md:text-8xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            A EXPERIÊNCIA COMPLETA
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCE_ITEMS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={index} className="group relative border-l border-[var(--smoke)] pl-8 transition-colors duration-300 hover:border-[var(--orange)]">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--charcoal)] text-[var(--orange)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--orange)] group-hover:text-black">
                  {Icon && <Icon className="h-8 w-8 stroke-[1.5]" />}
                </div>
                <h3 className="mb-4 font-sans text-3xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {item.title}
                </h3>
                <p className="font-sans text-base text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
