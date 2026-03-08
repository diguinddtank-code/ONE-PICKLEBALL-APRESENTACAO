'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { Check } from 'lucide-react';
import { PLANS } from '@/lib/constants';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Plans() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !cardsRef.current) return;

    const cards = gsap.utils.toArray(cardsRef.current.children);

    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="plans" className="relative bg-[var(--charcoal)] py-32 text-[var(--off-white)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
            Planos
          </span>
          <h2 className="mb-4 font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white sm:text-6xl md:text-8xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            VENHA SER MENSALISTA ONE
          </h2>
          <p className="font-sans text-lg text-[var(--text-muted)]">
            Escolha o plano e jogue sem limites.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {PLANS.map((plan, index) => (
            <div
              key={index}
              className={`group relative flex flex-col rounded-2xl bg-[var(--smoke)] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,64,10,0.3)] ${
                plan.highlight ? 'border-t-2 border-[var(--orange)] shadow-xl' : 'border-t-2 border-transparent hover:border-[var(--orange)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-4 rounded-full bg-[var(--orange)] px-4 py-1 font-sans text-xs font-bold tracking-widest text-black uppercase shadow-lg" style={{ fontFamily: 'var(--font-barlow)' }}>
                  Mais Popular
                </div>
              )}
              <h3 className="mb-2 font-sans text-4xl font-bold tracking-tighter text-white" style={{ fontFamily: 'var(--font-bebas)' }}>
                {plan.name}
              </h3>
              <div className="mb-8 flex items-baseline gap-2">
                <span className="font-sans text-2xl font-bold text-[var(--text-muted)]">R$</span>
                <span className="font-sans text-7xl font-bold tracking-tighter text-[var(--orange)]" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {plan.price}
                </span>
                <span className="font-sans text-lg text-[var(--text-muted)]">/mês</span>
              </div>
              <ul className="mb-12 flex-1 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-base text-[var(--off-white)]">
                    <Check className="h-5 w-5 shrink-0 text-[var(--orange)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <MagneticButton variant={plan.highlight ? 'primary' : 'outline'} className="w-full">
                Começar Agora
              </MagneticButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
