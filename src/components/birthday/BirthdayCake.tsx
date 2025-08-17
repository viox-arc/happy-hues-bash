import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Candle {
  id: number;
  isLit: boolean;
}

export const BirthdayCake = () => {
  const [candles, setCandles] = useState<Candle[]>([
    { id: 1, isLit: true },
    { id: 2, isLit: true },
    { id: 3, isLit: true },
    { id: 4, isLit: true },
    { id: 5, isLit: true },
  ]);
  
  const [message, setMessage] = useState("");

  const blowCandle = (candleId: number) => {
    setCandles(prev => 
      prev.map(candle => 
        candle.id === candleId ? { ...candle, isLit: false } : candle
      )
    );
  };

  const allCandlesBlown = candles.every(candle => !candle.isLit);

  const lightAllCandles = () => {
    setCandles(prev => 
      prev.map(candle => ({ ...candle, isLit: true }))
    );
    setMessage("");
  };

  if (allCandlesBlown && !message) {
    setTimeout(() => {
      setMessage("🎉 Make a wish! Your dreams will come true! 🎉");
    }, 500);
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative p-8 magic-blur rounded-3xl border border-birthday-pink/20">
        {/* Cake Base */}
        <div className="relative">
          <div className="w-48 h-32 bg-gradient-to-b from-birthday-soft to-birthday-purple rounded-lg shadow-xl">
            {/* Cake decoration */}
            <div className="absolute inset-2 bg-gradient-to-b from-white to-birthday-soft rounded-lg">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-birthday-pink rounded-full opacity-60" />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-birthday-purple rounded-full opacity-60" />
            </div>
          </div>

          {/* Candles */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {candles.map((candle) => (
              <div
                key={candle.id}
                className="relative cursor-pointer group"
                onClick={() => blowCandle(candle.id)}
              >
                {/* Candle stick */}
                <div className="w-2 h-8 bg-birthday-gold rounded-sm shadow-sm" />
                
                {/* Flame */}
                {candle.isLit && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-4 bg-gradient-to-t from-birthday-gold to-red-400 rounded-full animate-sparkle" />
                  </div>
                )}
                
                {/* Smoke effect when blown */}
                {!candle.isLit && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-300 opacity-50 rounded-full animate-fade-in" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Messages */}
      {message && (
        <div className="text-center p-4 magic-blur rounded-2xl border border-birthday-gold/30 animate-fade-in">
          <p className="text-lg font-semibold text-birthday-purple">{message}</p>
        </div>
      )}

      {/* Control Button */}
      <Button
        onClick={lightAllCandles}
        variant="outline"
        className="birthday-gradient text-white border-none hover:scale-105 transition-transform duration-300 birthday-glow"
      >
        {allCandlesBlown ? "🕯️ Light the Candles Again" : "💨 Blow all candles"}
      </Button>

      <p className="text-sm text-muted-foreground text-center max-w-md">
        Click on each candle to blow it out! ✨
      </p>
    </div>
  );
};