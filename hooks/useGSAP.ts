import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAP(callback: gsap.ContextFunc, options: { scope?: React.RefObject<any> | Element | string, dependencies?: React.DependencyList } = {}) {
  useEffect(() => {
    const ctx = gsap.context(callback, options.scope);
    return () => ctx.revert();
  }, options.dependencies || []);
}
