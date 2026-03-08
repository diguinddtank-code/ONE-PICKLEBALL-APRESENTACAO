'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function Location() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="location" className="relative bg-[var(--black)] py-32 text-[var(--off-white)]">
      <div className="container mx-auto grid grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-12">
        <div className="flex flex-col justify-center">
          <span className="mb-4 font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
            Onde Estamos
          </span>
          <h2 className="mb-12 font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white md:text-7xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            VENHA NOS VISITAR
          </h2>

          <div className="mb-12 flex items-start gap-4 font-sans text-lg text-[var(--text-muted)]">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-[var(--orange)]" />
            <p>
              R. Cristal, 137 B - Santa Tereza<br />
              Belo Horizonte - MG<br />
              31010-110
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-y-4 border-t border-b border-[var(--smoke)] py-8 font-sans text-sm text-[var(--text-muted)]">
            <div className="font-bold text-white">Seg–Sex</div>
            <div>6h – 23h</div>
            <div className="font-bold text-white">Sáb–Dom</div>
            <div>7h – 22h</div>
            <div className="font-bold text-white">Feriados</div>
            <div>8h – 20h</div>
          </div>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <MagneticButton variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black">
              WhatsApp
            </MagneticButton>
            <div className="flex items-center gap-3 font-sans text-lg font-medium text-[var(--off-white)]">
              <Phone className="h-5 w-5 text-[var(--orange)]" />
              (31) 99683-4123
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[var(--charcoal)] p-8">
          <Image 
            src="https://i.imgur.com/TSMItxM.jpeg" 
            alt="One Pickleball Arena Map" 
            fill 
            className="object-cover opacity-60 transition-transform duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center rounded-full bg-[var(--orange)] px-8 py-4 font-sans text-sm font-bold tracking-widest text-black uppercase transition-transform hover:scale-105"
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            Ver no Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
