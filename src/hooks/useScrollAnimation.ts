import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  animationClass = 'animate-scroll-up',
  delay = 0
}: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, delay]);

  return { ref, isVisible, animationClass };
};

export const useScrollBlur = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBlurClass = () => {
    if (scrollY > 200) return 'scroll-blur-intense';
    if (scrollY > 50) return 'scroll-blur';
    return '';
  };

  return { scrollY, getBlurClass };
};