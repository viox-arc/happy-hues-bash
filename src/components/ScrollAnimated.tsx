import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ScrollAnimatedProps {
  children: ReactNode;
  className?: string;
  animation?: 'up' | 'fade' | 'scale' | 'slideLeft' | 'slideRight';
  delay?: number;
  threshold?: number;
}

export const ScrollAnimated = ({ 
  children, 
  className, 
  animation = 'up',
  delay = 0,
  threshold = 0.1 
}: ScrollAnimatedProps) => {
  const animationClasses = {
    up: 'animate-scroll-up',
    fade: 'animate-scroll-fade', 
    scale: 'animate-scroll-scale',
    slideLeft: 'animate-scroll-slide-left',
    slideRight: 'animate-scroll-slide-right'
  };

  const hiddenClasses = {
    up: 'scroll-hidden',
    fade: 'scroll-hidden',
    scale: 'scroll-hidden-scale', 
    slideLeft: 'scroll-hidden-left',
    slideRight: 'scroll-hidden-right'
  };

  const { ref, isVisible } = useScrollAnimation({
    threshold,
    animationClass: animationClasses[animation],
    delay
  });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-300',
        isVisible ? animationClasses[animation] : hiddenClasses[animation],
        className
      )}
    >
      {children}
    </div>
  );
};