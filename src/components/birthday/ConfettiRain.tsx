import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  left: number;
  color: string;
  delay: number;
  size: number;
}

export const ConfettiRain = ({ active }: { active: boolean }) => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    if (!active) {
      setConfetti([]);
      return;
    }

    const colors = ['#FF69B4', '#DDA0DD', '#FFD700', '#FF6347', '#98FB98'];
    const newConfetti: Confetti[] = [];

    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2000,
        size: Math.random() * 8 + 4,
      });
    }

    setConfetti(newConfetti);

    const timer = setTimeout(() => {
      setConfetti([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [active]);

  if (!active || confetti.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}ms`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
          }}
        />
      ))}
    </div>
  );
};