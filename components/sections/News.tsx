'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@/hooks/useGSAP';
import Modal from '@/components/ui/Modal';
import MagneticButton from '@/components/ui/MagneticButton';

const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Torneio Inaugural One Pickleball',
    date: '15 de Março, 2026',
    image: 'https://i.imgur.com/XIG6wgL.jpeg',
    summary: 'Prepare-se para o maior torneio de inauguração de Belo Horizonte. Inscrições abertas para todas as categorias.',
    content: 'Estamos muito animados em anunciar o Torneio Inaugural da One Pickleball! Será um final de semana inteiro dedicado ao esporte que mais cresce no mundo. Teremos categorias para iniciantes, intermediários e avançados. Além dos jogos, teremos food trucks, música ao vivo e sorteio de brindes exclusivos das nossas marcas parceiras. Não fique de fora dessa festa do esporte!',
  },
  {
    id: 2,
    title: 'Novas Clínicas para Iniciantes',
    date: '10 de Março, 2026',
    image: 'https://i.imgur.com/J5JDwby.jpeg',
    summary: 'Nunca jogou? Nossas clínicas exclusivas para iniciantes vão te ensinar tudo o que você precisa saber para começar.',
    content: 'O pickleball é fácil de aprender, mas difícil de dominar. Para ajudar quem está dando os primeiros passos, lançamos nossas Clínicas para Iniciantes. Em apenas 2 horas, nossos instrutores certificados vão te ensinar as regras básicas, posicionamento em quadra e os principais golpes. As raquetes e bolinhas estão inclusas. Venha com roupas confortáveis e vontade de se divertir!',
  },
  {
    id: 3,
    title: 'Parceria com a Selkirk Sports',
    date: '05 de Março, 2026',
    image: 'https://i.imgur.com/oPXlT3X.jpeg',
    summary: 'Agora somos revendedores oficiais da Selkirk, a principal marca de equipamentos de pickleball do mundo.',
    content: 'É com muito orgulho que anunciamos nossa parceria com a Selkirk Sports. A partir de agora, a Pro Shop da One Pickleball terá a linha completa de raquetes, mochilas e acessórios da marca. Nossos alunos e mensalistas terão descontos exclusivos. Venha testar as raquetes da linha Vanguard e Amped antes de comprar. Eleve o seu jogo com os melhores equipamentos do mercado.',
  }
];

export default function News() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedNews, setSelectedNews] = useState<typeof NEWS_ITEMS[0] | null>(null);

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
    <section ref={sectionRef} id="news" className="relative flex w-full flex-col justify-center bg-[var(--black)] py-24 md:py-32">
      <div className="container mx-auto mb-16 px-6 md:px-12">
        <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
          Fique por dentro
        </span>
        <h2 className="font-sans text-5xl leading-[0.9] font-bold tracking-tighter text-white sm:text-6xl md:text-8xl" style={{ fontFamily: 'var(--font-bebas)' }}>
          ÚLTIMAS NOTÍCIAS
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {NEWS_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-[var(--charcoal)] transition-transform duration-300 hover:-translate-y-2"
              onClick={() => setSelectedNews(item)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] to-transparent opacity-80" />
              </div>
              <div className="p-8">
                <span className="mb-3 block font-sans text-xs font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
                  {item.date}
                </span>
                <h3 className="mb-4 font-sans text-2xl font-bold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[var(--text-muted)] line-clamp-3">
                  {item.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase transition-colors group-hover:text-white" style={{ fontFamily: 'var(--font-barlow)' }}>
                  Ler mais <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedNews} onClose={() => setSelectedNews(null)}>
        {selectedNews && (
          <div className="flex flex-col">
            <div className="relative mb-8 h-64 w-full overflow-hidden rounded-xl md:h-80">
              <Image 
                src={selectedNews.image} 
                alt={selectedNews.title} 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="mb-4 block font-sans text-sm font-bold tracking-widest text-[var(--orange)] uppercase" style={{ fontFamily: 'var(--font-barlow)' }}>
              {selectedNews.date}
            </span>
            <h2 className="mb-6 font-sans text-4xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: 'var(--font-bebas)' }}>
              {selectedNews.title}
            </h2>
            <div className="prose prose-invert max-w-none font-sans text-lg text-[var(--text-muted)]">
              <p>{selectedNews.content}</p>
            </div>
            <div className="mt-12 flex justify-center">
              <MagneticButton variant="primary" onClick={() => setSelectedNews(null)}>
                Fechar
              </MagneticButton>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
