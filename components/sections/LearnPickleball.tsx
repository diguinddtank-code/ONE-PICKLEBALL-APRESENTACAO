'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { ArrowDown, CheckCircle, XCircle, Info } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function LearnPickleball() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Reveal animations
    const sections = gsap.utils.toArray('.learn-section');
    
    sections.forEach((section: any) => {
      gsap.fromTo(section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-[var(--black)] py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Hero */}
        <div className="learn-section mb-24 text-center">
          <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
            Guia Rápido
          </span>
          <h1 className="mb-6 font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white sm:text-6xl md:text-8xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            APRENDA A JOGAR
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-lg text-[var(--text-muted)]">
            O Pickleball é fácil de aprender e viciante desde a primeira partida. Aqui está tudo o que você precisa saber para entrar em quadra hoje mesmo.
          </p>
        </div>

        {/* O que é */}
        <div className="learn-section mb-32 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[var(--charcoal)]">
             {/* Placeholder for Video or Diagram */}
             <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <span className="text-white font-bold opacity-50">Vídeo Explicativo (Em Breve)</span>
             </div>
          </div>
          <div>
            <h2 className="mb-6 font-sans text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-bebas)' }}>
              O QUE É PICKLEBALL?
            </h2>
            <p className="mb-6 text-lg text-[var(--text-muted)]">
              Uma mistura de Tênis, Badminton e Ping-Pong. Jogado em uma quadra de badminton, com uma rede de tênis (levemente mais baixa) e raquetes sólidas.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--orange)]" />
                <span className="text-[var(--off-white)]">Menor impacto nas articulações que o tênis.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--orange)]" />
                <span className="text-[var(--off-white)]">Foco em estratégia e paciência, não apenas força.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--orange)]" />
                <span className="text-[var(--off-white)]">Altamente social e jogado principalmente em duplas.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* A Cozinha (NVZ) */}
        <div className="learn-section mb-32 rounded-3xl bg-[var(--charcoal)] p-8 md:p-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-sans text-4xl font-bold text-[var(--orange)] md:text-5xl" style={{ fontFamily: 'var(--font-bebas)' }}>
              REGRA DE OURO: A COZINHA
            </h2>
            <p className="mb-12 text-xl text-white">
              A área de 2,13m próxima à rede é chamada de &quot;Zona de Não-Voleio&quot; ou &quot;Cozinha&quot;.
            </p>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-black/30 p-8 text-left border border-red-500/20">
                <div className="mb-4 flex items-center gap-3 text-red-400">
                  <XCircle className="h-6 w-6" />
                  <h3 className="font-bold uppercase">Proibido</h3>
                </div>
                <p className="text-[var(--text-muted)]">
                  Você <strong>NÃO PODE</strong> pisar na linha ou dentro da cozinha e bater na bola no ar (voleio). Nem mesmo o impulso pode te levar para dentro dela após o golpe.
                </p>
              </div>

              <div className="rounded-2xl bg-black/30 p-8 text-left border border-green-500/20">
                <div className="mb-4 flex items-center gap-3 text-green-400">
                  <CheckCircle className="h-6 w-6" />
                  <h3 className="font-bold uppercase">Permitido</h3>
                </div>
                <p className="text-[var(--text-muted)]">
                  Você <strong>PODE</strong> entrar na cozinha a qualquer momento, desde que a bola tenha quicado no chão antes de você bater nela.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pontuação e Saque */}
        <div className="learn-section grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="rounded-3xl border border-white/5 bg-[var(--charcoal)] p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--orange)] text-black font-bold text-xl">1</div>
            <h3 className="mb-4 font-sans text-2xl font-bold text-white uppercase">O Saque</h3>
            <p className="text-[var(--text-muted)]">
              Deve ser feito por baixo (underhand), diagonalmente cruzando a quadra. O saque não pode cair na cozinha adversária. Apenas o time que saca pode pontuar.
            </p>
          </div>

          <div className="rounded-3xl border border-white/5 bg-[var(--charcoal)] p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--orange)] text-black font-bold text-xl">2</div>
            <h3 className="mb-4 font-sans text-2xl font-bold text-white uppercase">Regra dos 2 Quiques</h3>
            <p className="text-[var(--text-muted)]">
              1. O saque deve quicar.<br/>
              2. A devolução do saque deve quicar.<br/>
              Só depois desses dois quiques (um de cada lado) é permitido volear (bater na bola sem deixar cair).
            </p>
          </div>

          <div className="rounded-3xl border border-white/5 bg-[var(--charcoal)] p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--orange)] text-black font-bold text-xl">3</div>
            <h3 className="mb-4 font-sans text-2xl font-bold text-white uppercase">Pontuação</h3>
            <p className="text-[var(--text-muted)]">
              Os jogos geralmente vão até 11 pontos e devem ser vencidos por 2 de diferença. O placar é cantado em 3 números: [Pontos do Sacador] - [Pontos do Recebedor] - [Servidor 1 ou 2].
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="learn-section mt-24 text-center">
          <h3 className="mb-6 font-sans text-3xl font-bold text-white md:text-5xl" style={{ fontFamily: 'var(--font-bebas)' }}>
            PRONTO PARA A PRÁTICA?
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton variant="primary">Agendar Clínica Iniciante</MagneticButton>
            <MagneticButton variant="outline">Ver Regras Completas (PDF)</MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
}
