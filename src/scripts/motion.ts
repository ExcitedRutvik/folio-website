// Lightweight GSAP scroll motion, imported only on pages that need richer animation
// (e.g. the tech page lotus/pillars). Basic reveals are handled CSS-only in Layout.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);

  // Draw-on SVG paths marked [data-draw]
  document.querySelectorAll<SVGPathElement>('[data-draw]').forEach((path) => {
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: { trigger: path.closest('[data-draw-scope]') || path, start: 'top 80%', end: 'bottom 55%', scrub: 0.6 },
    });
  });

  // Pillars assemble: elements [data-rise] slide up + fade, staggered within a scope.
  document.querySelectorAll('[data-rise-scope]').forEach((scope) => {
    const items = scope.querySelectorAll('[data-rise]');
    gsap.from(items, {
      yPercent: 60, opacity: 0, stagger: 0.12, ease: 'power3.out', duration: 1,
      scrollTrigger: { trigger: scope, start: 'top 75%' },
    });
  });

  // Subtle parallax for [data-parallax] (value = strength px)
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const strength = parseFloat(el.dataset.parallax || '40');
    gsap.to(el, { y: strength, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}
