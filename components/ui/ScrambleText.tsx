'use client';

import { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  trigger: boolean;
  className?: string;
}

export default function ScrambleText({ text, trigger, className }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    const maxIterations = 15;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, trigger]);

  return <span className={className}>{displayText}</span>;
}
