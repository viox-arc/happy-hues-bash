import { useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingBalloonProps {
  color: "pink" | "purple" | "gold";
  delay?: number;
  onClick?: () => void;
}

export const FloatingBalloon = ({ color, delay = 0, onClick }: FloatingBalloonProps) => {
  const [isPopped, setIsPopped] = useState(false);

  const handleClick = () => {
    setIsPopped(true);
    onClick?.();
    setTimeout(() => setIsPopped(false), 2000);
  };

  const colorClasses = {
    pink: "bg-birthday-pink",
    purple: "bg-birthday-purple", 
    gold: "bg-birthday-gold"
  };

  return (
    <div
      className={cn(
        "relative cursor-pointer transition-all duration-300 hover:scale-110",
        isPopped ? "animate-bounce-slow" : "animate-float"
      )}
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleClick}
    >
      <div className={cn(
        "w-16 h-20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
        colorClasses[color],
        isPopped ? "scale-125 animate-sparkle" : ""
      )}>
        {/* Balloon highlight */}
        <div className="absolute top-2 left-3 w-4 h-6 bg-white/30 rounded-full blur-sm" />
        
        {/* Balloon string */}
        <div className="absolute bottom-0 left-1/2 w-px h-8 bg-gray-400 transform -translate-x-1/2" />
        
        {/* Pop effect */}
        {isPopped && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-lg animate-bounce">🎉</span>
          </div>
        )}
      </div>
    </div>
  );
};