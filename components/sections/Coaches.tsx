'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { Instagram } from 'lucide-react';

const COACHES = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Head Coach',
    image: 'https://i.imgur.com/KWjgtQD.jpeg',
    bio: 'Ex-tenista profissional, Carlos encontrou no pickleball sua verdadeira paixão. Com mais de 5 anos de experiência ensinando o esporte, ele é especialista em táticas avançadas e posicionamento de quadra.',
    instagram: 'https://instagram.com',
  },
  {
    id: 2,
    name: 'Marina Costa',
    role: 'Treinadora Nível 2',
    image: 'https://i.imgur.com/Lq9Vv2I.jpeg',
    bio: 'Marina é a nossa especialista em iniciantes. Com uma didática incrível e muita paciência, ela já introduziu centenas de alunos ao mundo do pickleball. Suas clínicas são sempre as mais disputadas.',
    instagram: 'https://instagram.com',
  },
  {
    id: 3,
    name: 'Rafael Mendes',
    role: 'Preparador Físico & Coach',
    image: 'https://i.imgur.com/J5JDwby.jpeg',
    bio: 'Focado em performance e prevenção de lesões, Rafael combina o treinamento técnico do pickleball com condicionamento físico específico para o esporte. Ideal para quem quer competir em alto nível.',
    instagram: 'https://instagram.com',
  }
];

export default function Coaches() {
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
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="coaches" className="relative flex w-full flex-col justify-center bg-[var(--charcoal)] py-24 md:py-32">
      <div className="container mx-auto mb-16 px-6 md:px-12">
        <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
          Nossa Equipe
        </span>
        <h2 className="font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white sm:text-6xl md:text-8xl" style={{ fontFamily: 'var(--font-bebas)' }}>
          CONHEÇA NOSSOS PROFESSORES
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {COACHES.map((coach) => (
            <div 
              key={coach.id}
              className="group relative overflow-hidden rounded-2xl bg-[var(--black)]"
            >
              <div className="relative h-80 w-full overflow-hidden sm:h-96">
                <Image 
                  src={coach.image} 
                  alt={coach.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 transition-transform duration-300 md:translate-y-4 md:group-hover:translate-y-0">
                  <span className="mb-1 block font-sans text-xs font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
                    {coach.role}
                  </span>
                  <h3 className="mb-2 font-sans text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {coach.name}
                  </h3>
                  <div className="overflow-hidden transition-all duration-300 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100">
                    <p className="mb-4 font-sans text-sm text-[var(--text-muted)]">
                      {coach.bio}
                    </p>
                    <a 
                      href={coach.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-white uppercase transition-colors hover:text-[var(--orange)]"
                      style={{ fontFamily: 'var(--font-barlow)' }}
                    >
                      <Instagram className="h-4 w-4" />
                      Seguir
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
