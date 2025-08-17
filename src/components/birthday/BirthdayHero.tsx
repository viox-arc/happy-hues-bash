import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FloatingBalloon } from "./FloatingBalloon";
import { ConfettiRain } from "./ConfettiRain";
import { useScrollBlur } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import birthdayBg from "@/assets/birthday-bg.jpg";

interface BirthdayHeroProps {
  name?: string;
}

export const BirthdayHero = ({ name = "Beautiful Soul" }: BirthdayHeroProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [messageRevealed, setMessageRevealed] = useState(false);
  const { getBlurClass } = useScrollBlur();

  const triggerCelebration = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageRevealed(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Dynamic Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{ backgroundImage: `url(${birthdayBg})` }}
      />
      <div className={cn("absolute inset-0 transition-all duration-500", getBlurClass())}>
        <div className="absolute inset-0 bg-gradient-to-br from-birthday-dark via-birthday-magic/50 to-birthday-dark opacity-90" />
        <div className="absolute inset-0 bg-gradient-radial from-birthday-purple/20 via-transparent to-transparent" />
      </div>

      {/* Floating Balloons */}
      <div className="absolute top-20 left-10">
        <FloatingBalloon color="pink" delay={0} onClick={triggerCelebration} />
      </div>
      <div className="absolute top-32 right-16">
        <FloatingBalloon color="purple" delay={500} onClick={triggerCelebration} />
      </div>
      <div className="absolute top-40 left-1/3">
        <FloatingBalloon color="gold" delay={1000} onClick={triggerCelebration} />
      </div>
      <div className="absolute top-28 right-1/3">
        <FloatingBalloon color="pink" delay={1500} onClick={triggerCelebration} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={`space-y-8 transition-all duration-1000 ${messageRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Birthday Message */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold birthday-gradient bg-clip-text text-transparent animate-glow">
              Happy Birthday
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-birthday-purple">
              {name}! 🎉
            </h2>
          </div>

          {/* Magical Message */}
          <div className="p-8 magic-blur rounded-3xl border border-birthday-purple/30 shadow-2xl">
            <p className="text-xl md:text-2xl text-birthday-pink leading-relaxed font-medium">
              ✨ Today we celebrate the most amazing person! ✨
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-4">
              May your special day be filled with magic, laughter, and endless joy!
            </p>
          </div>

          {/* Interactive Button */}
          <Button 
            onClick={triggerCelebration}
            className="sparkle-gradient text-white px-12 py-6 text-xl font-bold rounded-full hover:scale-110 transition-all duration-300 shadow-2xl border-2 border-birthday-gold/30"
            style={{ boxShadow: '0 0 40px hsl(var(--birthday-gold) / 0.6), 0 0 80px hsl(var(--birthday-purple) / 0.4)' }}
          >
            🎈 Start the Celebration! 🎈
          </Button>

          {/* Click balloons hint */}
          <p className="text-birthday-purple animate-sparkle text-lg font-medium">
            💫 Click the floating balloons for surprises! 💫
          </p>
        </div>
      </div>

      {/* Confetti Effect */}
      <ConfettiRain active={showConfetti} />
    </div>
  );
};