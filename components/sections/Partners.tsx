'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';

const PARTNERS = [
  { id: 1, name: 'Selkirk', logo: 'https://i.imgur.com/w0dEAxk.png' },
  { id: 2, name: 'Joola', logo: 'https://i.imgur.com/w0dEAxk.png' },
  { id: 3, name: 'Engage', logo: 'https://i.imgur.com/w0dEAxk.png' },
  { id: 4, name: 'Franklin', logo: 'https://i.imgur.com/w0dEAxk.png' },
  { id: 5, name: 'Paddletek', logo: 'https://i.imgur.com/w0dEAxk.png' },
  { id: 6, name: 'CRBN', logo: 'https://i.imgur.com/w0dEAxk.png' },
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !marqueeRef.current) return;

    gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1,
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="partners" className="relative flex w-full flex-col justify-center overflow-hidden border-y border-[var(--smoke)] bg-[var(--black)] py-16 md:py-24">
      <div className="container mx-auto mb-12 px-6 text-center md:px-12">
        <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--text-muted)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
          Nossos Parceiros Oficiais
        </span>
      </div>

      <div className="relative flex w-full overflow-hidden">
        <div ref={marqueeRef} className="flex w-[200%] gap-12 pl-12 md:gap-24 md:pl-24">
          {/* Double the items for seamless loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`}
              className="relative flex h-16 w-32 shrink-0 items-center justify-center opacity-50 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0 md:h-24 md:w-48"
            >
              <Image 
                src={partner.logo} 
                alt={`${partner.name} Logo`} 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
