'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--smoke)] bg-black py-24 text-center text-[var(--off-white)]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <Image 
          src="https://i.imgur.com/w0dEAxk.png" 
          alt="One Pickleball Logo" 
          width={800} 
          height={400} 
          className="h-auto w-3/4 object-contain opacity-20 grayscale" 
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-wrap justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] transition-colors hover:text-[var(--orange)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mb-16 flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--smoke)] p-4 text-[var(--text-muted)] transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://wa.me/5531996834123"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--smoke)] p-4 text-[var(--text-muted)] transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>

        <div className="border-t border-[var(--smoke)] pt-8">
          <p className="font-sans text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} One Pickleball. Feito com paixão pelo pickleball 🏓
          </p>
        </div>
      </div>
    </footer>
  );
}
