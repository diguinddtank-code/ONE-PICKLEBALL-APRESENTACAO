'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { Instagram, Calendar, Star, Clock, Trophy } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

const COACHES_DETAILED = [
  {
    id: 1,
    name: 'Carlos Silva',
    role: 'Head Coach',
    image: 'https://i.imgur.com/KWjgtQD.jpeg',
    bio: 'Ex-tenista profissional, Carlos encontrou no pickleball sua verdadeira paixão. Com mais de 5 anos de experiência ensinando o esporte, ele é especialista em táticas avançadas e posicionamento de quadra. Seus alunos frequentemente conquistam pódios em torneios nacionais.',
    specialties: ['Estratégia Avançada', 'Posicionamento', 'Mental Game'],
    price: 'R$ 250/h',
    availability: 'Seg - Sex: 07:00 - 11:00',
    achievements: ['Campeão Brasileiro 2023', 'Certificação PPR Nível 2'],
    instagram: 'https://instagram.com',
  },
  {
    id: 2,
    name: 'Marina Costa',
    role: 'Treinadora Nível 2',
    image: 'https://i.imgur.com/Lq9Vv2I.jpeg',
    bio: 'Marina é a nossa especialista em iniciantes e desenvolvimento de base. Com uma didática incrível e muita paciência, ela já introduziu centenas de alunos ao mundo do pickleball. Suas clínicas são focadas em fundamentos sólidos e diversão.',
    specialties: ['Iniciantes', 'Fundamentos', 'Clínicas Kids'],
    price: 'R$ 180/h',
    availability: 'Ter - Sáb: 14:00 - 19:00',
    achievements: ['Melhor Treinadora Iniciante 2023', 'Certificação PPR Nível 1'],
    instagram: 'https://instagram.com',
  },
  {
    id: 3,
    name: 'Rafael Mendes',
    role: 'Preparador Físico & Coach',
    image: 'https://i.imgur.com/J5JDwby.jpeg',
    bio: 'Focado em performance e prevenção de lesões, Rafael combina o treinamento técnico do pickleball com condicionamento físico específico para o esporte. Ideal para quem quer competir em alto nível e precisa melhorar a agilidade e resistência.',
    specialties: ['Condicionamento', 'Prevenção de Lesões', 'Agilidade'],
    price: 'R$ 200/h',
    availability: 'Seg, Qua, Sex: 16:00 - 21:00',
    achievements: ['Mestre em Fisiologia', 'Ex-Atleta Olímpico'],
    instagram: 'https://instagram.com',
  },
  {
    id: 4,
    name: 'Ana Souza',
    role: 'Especialista em Duplas',
    image: 'https://i.imgur.com/oPXlT3X.jpeg',
    bio: 'Ana é mestre na dinâmica de duplas. Ela ensina como se comunicar eficientemente com seu parceiro, cobrir a quadra e criar jogadas vencedoras. Suas aulas são essenciais para quem quer subir de nível em torneios de duplas.',
    specialties: ['Dinâmica de Duplas', 'Comunicação', 'Voleios'],
    price: 'R$ 220/h',
    availability: 'Qui - Dom: 09:00 - 14:00',
    achievements: ['Campeã Pan-Americana de Duplas', 'Certificação IPTPA'],
    instagram: 'https://instagram.com',
  }
];

export default function CoachesDetailed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !titleRef.current) return;

    // Title Animation
    gsap.fromTo(titleRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );

    // Cards Animation
    const cards = gsap.utils.toArray('.coach-card');
    gsap.fromTo(cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-[var(--black)] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div ref={titleRef} className="mb-20 text-center">
          <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
            Nossos Especialistas
          </span>
          <h1 className="mb-6 font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white sm:text-6xl md:text-8xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            EQUIPE DE ELITE
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg text-[var(--text-muted)]">
            Treine com os melhores. Nossa equipe é formada por profissionais certificados, ex-atletas e especialistas dedicados a elevar o seu jogo.
          </p>
        </div>

        {/* Coaches List */}
        <div className="flex flex-col gap-12 md:gap-24">
          {COACHES_DETAILED.map((coach, index) => (
            <div 
              key={coach.id}
              className={`coach-card flex flex-col gap-8 rounded-3xl bg-[var(--charcoal)] p-6 md:flex-row md:gap-12 md:p-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Column */}
              <div className="relative h-80 w-full shrink-0 overflow-hidden rounded-2xl md:h-[500px] md:w-[400px]">
                <Image 
                  src={coach.image} 
                  alt={coach.name} 
                  fill 
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                   <a 
                      href={coach.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-sans text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md transition-colors hover:bg-[var(--orange)] hover:text-black"
                      style={{ fontFamily: 'var(--font-barlow)' }}
                    >
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </a>
                </div>
              </div>

              {/* Content Column */}
              <div className="flex flex-1 flex-col justify-center">
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-block rounded-full bg-[var(--orange)]/10 px-3 py-1 font-sans text-xs font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
                    {coach.role}
                  </span>
                  <span className="flex items-center gap-1 font-sans text-sm font-bold text-[var(--text-muted)]">
                    <Star className="h-4 w-4 fill-[var(--orange)] text-[var(--orange)]" />
                    5.0
                  </span>
                </div>

                <h2 className="mb-6 font-sans text-4xl font-bold text-white md:text-6xl" style={{ fontFamily: 'var(--font-bebas)' }}>
                  {coach.name}
                </h2>

                <p className="mb-8 font-sans text-lg leading-relaxed text-[var(--off-white)]">
                  {coach.bio}
                </p>

                {/* Info Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 font-sans text-sm font-bold tracking-widest text-[var(--text-muted)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
                      <Trophy className="h-4 w-4 text-[var(--orange)]" />
                      Especialidades
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((spec, i) => (
                        <span key={i} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-sans text-xs text-white">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 flex items-center gap-2 font-sans text-sm font-bold tracking-widest text-[var(--text-muted)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
                      <Clock className="h-4 w-4 text-[var(--orange)]" />
                      Disponibilidade
                    </h4>
                    <p className="font-sans text-sm text-white">{coach.availability}</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-10 rounded-xl border border-white/5 bg-black/20 p-6">
                   <h4 className="mb-3 font-sans text-sm font-bold tracking-widest text-[var(--text-muted)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
                      Conquistas & Certificações
                    </h4>
                    <ul className="space-y-2">
                      {coach.achievements.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 font-sans text-sm text-white">
                          <div className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between border-t border-white/10 pt-8">
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold tracking-widest text-[var(--text-muted)] uppercase">Valor Hora/Aula</span>
                    <span className="font-sans text-3xl font-bold text-white">{coach.price}</span>
                  </div>
                  <MagneticButton variant="primary" className="w-full sm:w-auto">
                    Agendar Aula Particular
                  </MagneticButton>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 rounded-3xl bg-[var(--orange)] p-12 text-center text-black">
          <h3 className="mb-4 font-sans text-4xl font-bold uppercase leading-none md:text-6xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            Quer evoluir mais rápido?
          </h3>
          <p className="mx-auto mb-8 max-w-xl font-sans text-lg font-medium opacity-80">
            Nossos pacotes de aulas intensivas oferecem o melhor custo-benefício para quem busca resultados expressivos em curto prazo.
          </p>
          <MagneticButton variant="outline" className="border-black text-black hover:bg-black hover:text-white">
            Ver Pacotes de Aulas
          </MagneticButton>
        </div>

      </div>
    </section>
  );
}
