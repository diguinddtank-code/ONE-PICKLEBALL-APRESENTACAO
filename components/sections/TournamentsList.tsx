'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import MagneticButton from '@/components/ui/MagneticButton';
import { Calendar, Trophy, Users, Medal, ArrowRight } from 'lucide-react';

const TOURNAMENTS = [
  {
    id: 1,
    date: '15-16',
    month: 'MAR',
    year: '2026',
    title: 'Open de Inauguração One',
    categories: ['Iniciante (2.5)', 'Intermediário (3.0-3.5)', 'Avançado (4.0+)'],
    type: 'Duplas Mistas & Fixas',
    status: 'Inscrições Abertas',
    image: 'https://i.imgur.com/XIG6wgL.jpeg',
    price: 'R$ 150,00 / atleta',
  },
  {
    id: 2,
    date: '05',
    month: 'ABR',
    year: '2026',
    title: 'Rei & Rainha da Quadra',
    categories: ['Geral (Nivelamento na hora)'],
    type: 'Individual (Rodízio de parceiros)',
    status: 'Vagas Limitadas',
    image: 'https://i.imgur.com/J5JDwby.jpeg',
    price: 'R$ 80,00 / atleta',
  },
  {
    id: 3,
    date: '20-21',
    month: 'MAI',
    year: '2026',
    title: 'Liga One - Etapa 1',
    categories: ['A (4.0+)', 'B (3.5)', 'C (3.0)', 'D (Iniciante)'],
    type: 'Duplas Fixas',
    status: 'Em Breve',
    image: 'https://i.imgur.com/oPXlT3X.jpeg',
    price: 'R$ 120,00 / atleta',
  }
];

export default function TournamentsList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray('.tournament-card');
    
    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
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
        <div className="mb-20 text-center">
          <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
            Competição & Diversão
          </span>
          <h1 className="mb-6 font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white sm:text-6xl md:text-8xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            CALENDÁRIO DE TORNEIOS
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg text-[var(--text-muted)]">
            Desafie-se, suba no ranking e faça parte da comunidade mais vibrante de Pickleball. Temos eventos para todos os níveis, do iniciante ao pro.
          </p>
        </div>

        {/* Tournaments List */}
        <div className="flex flex-col gap-8">
          {TOURNAMENTS.map((event) => (
            <div 
              key={event.id}
              className="tournament-card group relative overflow-hidden rounded-3xl border border-white/5 bg-[var(--charcoal)] transition-all duration-300 hover:border-[var(--orange)]/30"
            >
              <div className="flex flex-col md:flex-row">
                
                {/* Date Column */}
                <div className="flex w-full shrink-0 flex-row items-center justify-between bg-[var(--orange)] p-6 text-black md:w-48 md:flex-col md:justify-center md:p-8">
                  <div className="text-center">
                    <span className="block font-sans text-4xl font-bold leading-none md:text-5xl" style={{ fontFamily: 'var(--font-bebas)' }}>{event.date}</span>
                    <span className="block font-sans text-xl font-bold uppercase tracking-wider md:text-2xl" style={{ fontFamily: 'var(--font-bebas)' }}>{event.month}</span>
                    <span className="mt-1 block font-sans text-sm font-bold opacity-80">{event.year}</span>
                  </div>
                  <div className="md:hidden">
                    <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                      {event.status}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8 lg:flex-row lg:items-center">
                  <div className="mb-6 lg:mb-0 lg:pr-8">
                    <div className="mb-2 hidden md:block">
                      <span className={`inline-block rounded-full px-3 py-1 font-sans text-xs font-bold tracking-widest uppercase ${event.status === 'Inscrições Abertas' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white'}`} style={{ fontFamily: 'var(--font-barlow)' }}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="mb-4 font-sans text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-bebas)' }}>
                      {event.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--text-muted)]">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[var(--orange)]" />
                        <span>{event.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-[var(--orange)]" />
                        <span>{event.categories.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Medal className="h-4 w-4 text-[var(--orange)]" />
                        <span>{event.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Column */}
                  <div className="flex shrink-0 items-center justify-start lg:justify-end">
                    <MagneticButton variant={event.status === 'Inscrições Abertas' ? 'primary' : 'outline'} className="w-full sm:w-auto">
                      {event.status === 'Inscrições Abertas' ? 'Inscrever-se' : 'Saiba Mais'}
                    </MagneticButton>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* League Info */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--charcoal)] p-8 md:p-12">
            <div className="relative z-10">
              <h3 className="mb-4 font-sans text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-bebas)' }}>
                LIGA INTERNA MENSAL
              </h3>
              <p className="mb-6 text-[var(--text-muted)]">
                Participe da nossa liga recorrente. Jogos semanais, ranking atualizado em tempo real e premiação para os campeões do mês.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                  Sobe e desce de divisões
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                  Flexibilidade de horários
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                  Happy hour exclusivo pós-rodada
                </li>
              </ul>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-[var(--orange)] hover:text-white transition-colors">
                Ver Regulamento <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[var(--orange)]/5 blur-3xl" />
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[var(--charcoal)] p-8 md:p-12">
            <div className="relative z-10">
              <h3 className="mb-4 font-sans text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'var(--font-bebas)' }}>
                CORPORATE & EVENTOS
              </h3>
              <p className="mb-6 text-[var(--text-muted)]">
                Leve sua empresa para a quadra. Organizamos torneios corporativos, team building e festas de aniversário com estrutura completa.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                  Buffet e Bar inclusos
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                  Clínica para iniciantes inclusa
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
                  Organização completa do torneio
                </li>
              </ul>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-[var(--orange)] hover:text-white transition-colors">
                Solicitar Orçamento <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
          </div>
        </div>

      </div>
    </section>
  );
}
