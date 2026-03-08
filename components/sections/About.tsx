'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import CountUp from '@/components/ui/CountUp';
import { STATS } from '@/lib/constants';
import { PickleballBall } from '@/components/ui/PickleballIcons';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !leftRef.current || !rightRef.current || !imageRef.current) return;

    gsap.fromTo(leftRef.current.children,
      { x: -50, opacity: 0 },
      {
        x: 0,
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

    gsap.fromTo(rightRef.current.children,
      { x: 50, opacity: 0 },
      {
        x: 0,
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

    gsap.fromTo(imageRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="relative overflow-hidden bg-[var(--charcoal)] py-32 text-[var(--off-white)]">
      <div className="pointer-events-none absolute -right-64 top-1/2 z-0 -translate-y-1/2 opacity-5">
        <PickleballBall className="h-[800px] w-[800px] animate-[spin_60s_linear_infinite] text-white" />
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-12">
        <div ref={leftRef} className="order-2 flex flex-col justify-center gap-y-16 md:order-1">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12">
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-sans text-4xl leading-none font-bold tracking-tighter text-[var(--orange)] sm:text-5xl md:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-bebas)' }}>
                  <CountUp end={stat.value} duration={2.5} prefix={stat.prefix} suffix={stat.suffix} />
                </span>
                <span className="mt-1 font-sans text-[10px] font-semibold tracking-widest text-[var(--text-muted)] uppercase sm:mt-2 sm:text-xs md:text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
          <div ref={imageRef} className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image 
              src="https://i.imgur.com/ROgMzpz.jpeg" 
              alt="One Pickleball Arena" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div ref={rightRef} className="order-1 flex flex-col justify-center md:order-2">
          <div className="mb-8 h-[2px] w-[60px] bg-[var(--orange)]" />
          <span className="mb-4 font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
            A Arena
          </span>
          <h2 className="mb-8 font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white md:text-7xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            UMA ESTRUTURA FEITA PARA QUEM LEVA O JOGO A SÉRIO
          </h2>
          <div className="space-y-6 font-sans text-lg text-[var(--text-muted)]">
            <p>
              Não somos apenas mais um clube. A One Pickleball nasceu da necessidade de um espaço verdadeiramente profissional no Brasil. Cada detalhe, desde o piso até a iluminação, foi pensado para maximizar a performance.
            </p>
            <p>
              Seja você um iniciante buscando aprender ou um profissional treinando para o próximo campeonato, nossa arena oferece o ambiente perfeito para evoluir no esporte que mais cresce no mundo.
            </p>
          </div>
          <a href="#history" className="mt-10 inline-flex items-center font-sans font-semibold text-[var(--orange)] transition-colors hover:text-white">
            Conheça nossa história <span className="ml-2 transition-transform hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
