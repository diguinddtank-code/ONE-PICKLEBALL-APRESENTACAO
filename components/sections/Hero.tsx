'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import MagneticButton from '@/components/ui/MagneticButton';
import { PickleballBall, PickleballCourt, PickleballPaddleRealistic, PickleballCourt3D } from '@/components/ui/PickleballIcons';
import { Trophy, Users } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ballRef = useRef<SVGSVGElement>(null);
  const courtRef = useRef<SVGSVGElement>(null);
  const paddleRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !leftRef.current || !rightRef.current || !imageRef.current) return;

    // Parallax effect on the background image
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Logo entrance animation
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { scale: 0.5, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'elastic.out(1, 0.6)',
          delay: 0.2,
        }
      );
    }

    // Fade in other text elements
    const leftElements = Array.from(leftRef.current.children).filter(el => el !== logoRef.current);
    gsap.fromTo(leftElements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.5,
      }
    );

    // Fade in right side elements
    gsap.fromTo(rightRef.current.children,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.2)',
        delay: 0.8,
      }
    );

    // Floating ball animation
    if (ballRef.current) {
      gsap.to(ballRef.current, {
        y: -20,
        x: 10,
        rotation: 360,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Floating paddle animation
    if (paddleRef.current) {
      gsap.to(paddleRef.current, {
        y: -15,
        rotation: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Court drawing animation
    if (courtRef.current) {
      gsap.fromTo(courtRef.current, 
        { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 0.05,
          duration: 4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative flex min-h-[100svh] w-full items-center justify-center bg-[var(--black)] overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-[var(--black)]/80 lg:bg-[var(--black)]/70" />
        <Image 
          ref={imageRef}
          src="https://i.imgur.com/I8DQcpD.jpeg" 
          alt="One Pickleball Arena" 
          fill 
          className="object-cover scale-110" 
          priority 
          referrerPolicy="no-referrer"
        />
        <div className="pointer-events-none absolute left-10 bottom-1/4 z-20 opacity-10">
          <PickleballCourt ref={courtRef} className="h-48 w-48 -rotate-12 text-[var(--orange)] lg:h-96 lg:w-96" />
        </div>
      </div>

      {/* Inner Centered Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center lg:flex-row lg:justify-between gap-6 px-6 pt-12 pb-10 sm:gap-8 sm:pt-16 sm:pb-12 lg:py-0">
        
        {/* Left Column - Content */}
        <div ref={leftRef} className="flex w-full flex-col items-center text-center lg:w-[45%] lg:items-start lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--charcoal)]/80 px-4 py-2 border border-[var(--smoke)] backdrop-blur-sm sm:mb-5 sm:px-5 sm:py-2.5 lg:mb-6">
            <span className="h-2 w-2 rounded-full bg-[var(--orange)] animate-pulse sm:h-2.5 sm:w-2.5" />
            <span className="font-sans text-xs font-bold tracking-widest text-white uppercase sm:text-sm lg:text-base" style={{ fontFamily: 'var(--font-barlow)' }}>
              Arena de Pickleball BH
            </span>
          </div>

          <div ref={logoRef} className="mb-4 relative flex w-[85vw] max-w-[300px] items-center justify-center sm:mb-6 sm:w-full sm:max-w-[360px] lg:mb-8 lg:max-w-[460px]">
            <Image 
              src="https://i.imgur.com/w0dEAxk.png" 
              alt="One Pickleball Logo" 
              width={800} 
              height={300} 
              className="h-auto w-full object-contain brightness-0 invert"
              priority
            />
          </div>

          <p className="mb-6 max-w-[320px] sm:max-w-md font-sans text-sm leading-relaxed text-[var(--off-white)] sm:mb-8 sm:text-base lg:mb-10 lg:max-w-lg lg:text-lg">
            A febre americana chegou a Belo Horizonte. Aulas, torneios e diversão garantida na melhor estrutura da cidade.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4 lg:gap-5">
            <MagneticButton variant="primary" className="w-full sm:w-auto">Agendar Aula</MagneticButton>
            <MagneticButton variant="outline" className="w-full sm:w-auto bg-black/50 lg:bg-transparent">Ver no Instagram</MagneticButton>
          </div>
        </div>

        {/* Right Column - Graphic (Desktop Only) */}
        <div className="hidden w-full items-center justify-center lg:flex lg:w-[50%]">
          <div ref={rightRef} className="relative flex h-[600px] w-[500px] items-center justify-center perspective-1000">
            
            {/* 3D Court Base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] z-0 opacity-80 transform rotate-x-12 scale-110">
              <PickleballCourt3D className="w-full h-full drop-shadow-2xl" />
            </div>

            {/* Realistic Paddle SVG */}
            <div className="relative z-10 transform -rotate-12 hover:rotate-0 transition-transform duration-700 ease-out">
              <PickleballPaddleRealistic ref={paddleRef} className="h-[450px] w-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
              
              {/* Logo on Paddle */}
              <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-24 opacity-80 mix-blend-overlay">
                 <Image 
                  src="https://i.imgur.com/w0dEAxk.png" 
                  alt="One Pickleball Logo" 
                  width={100} 
                  height={50} 
                  className="w-full h-auto brightness-0 invert"
                />
              </div>
            </div>

            {/* Floating Ball */}
            <div className="absolute right-10 top-20 z-20">
              <PickleballBall ref={ballRef} className="h-24 w-24 text-[#eab308] drop-shadow-[0_10px_20px_rgba(234,179,8,0.3)]" />
            </div>

            {/* Floating Stats 1 */}
            <div className="absolute -left-8 top-32 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 p-3 shadow-2xl backdrop-blur-md animate-float-slow">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--orange)]/20 text-[var(--orange)] border border-[var(--orange)]/30">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[9px] font-bold tracking-widest text-[var(--text-muted)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>Desde</span>
                <span className="font-sans text-lg font-bold text-white leading-none">2024</span>
              </div>
            </div>

            {/* Floating Stats 2 */}
            <div className="absolute -right-0 bottom-32 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-white p-3 shadow-2xl animate-float-delayed">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                <Users className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[9px] font-bold tracking-widest text-black/60 uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>Comunidade</span>
                <span className="font-sans text-lg font-bold text-black leading-none">500+</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
