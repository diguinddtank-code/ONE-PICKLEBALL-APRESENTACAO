'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const IMAGES = [
  "https://i.imgur.com/XIG6wgL.jpeg",
  "https://i.imgur.com/J5JDwby.jpeg",
  "https://i.imgur.com/oPXlT3X.jpeg",
  "https://i.imgur.com/KWjgtQD.jpeg",
  "https://i.imgur.com/I8DQcpD.jpeg",
  "https://i.imgur.com/tHCZC9E.jpeg",
  "https://i.imgur.com/Lq9Vv2I.jpeg"
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return;

    gsap.to(trackRef.current, {
      x: () => -(trackRef.current!.scrollWidth - window.innerWidth + 48), // Add padding to the end
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${trackRef.current!.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="gallery" className="relative flex h-[100svh] w-full flex-col justify-center overflow-hidden bg-[var(--charcoal)] py-8 md:py-12">
      <div className="container mx-auto max-w-7xl mb-6 px-6 md:mb-8 md:px-12">
        <span className="mb-2 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
          Nossa Estrutura
        </span>
        <h2 className="font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white sm:text-6xl md:text-8xl" style={{ fontFamily: 'var(--font-bebas)' }}>
          A ARENA EM DETALHES
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden pl-6 md:pl-12 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))]">
        <div ref={trackRef} className="flex gap-4 md:gap-8 pb-8">
          {IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="relative h-[40vh] w-[70vw] shrink-0 overflow-hidden rounded-2xl sm:h-[45vh] sm:w-[50vw] md:h-[50vh] md:w-[40vw] lg:h-[55vh] lg:w-[35vw] xl:w-[30vw]"
            >
              <Image 
                src={src} 
                alt={`One Pickleball Gallery Image ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
