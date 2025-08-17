import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const surpriseMessages = [
  "🌟 You light up every room you enter! 🌟",
  "🎈 Your smile is the most beautiful gift! 🎈",
  "✨ May this year bring you endless joy! ✨",
  "🎂 You deserve all the happiness in the world! 🎂",
  "🌸 Your kindness makes the world better! 🌸",
  "🎉 Here's to another year of amazing adventures! 🎉",
  "💖 You are truly one of a kind! 💖",
  "🌺 Wishing you love, laughter, and magic! 🌺"
];

export const SurpriseMessages = () => {
  const [revealedMessages, setRevealedMessages] = useState<number[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const revealMessage = () => {
    const availableMessages = surpriseMessages.filter((_, index) => 
      !revealedMessages.includes(index)
    );
    
    if (availableMessages.length === 0) {
      setRevealedMessages([]);
      return;
    }

    const randomIndex = Math.floor(Math.random() * surpriseMessages.length);
    
    if (!revealedMessages.includes(randomIndex)) {
      setCurrentMessage(surpriseMessages[randomIndex]);
      setRevealedMessages(prev => [...prev, randomIndex]);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <Button
        onClick={revealMessage}
        className="sparkle-gradient text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 magical-shadow animate-glow"
      >
        ✨ Click for a Special Message ✨
      </Button>

      {currentMessage && (
        <Card className="max-w-md p-6 text-center magic-blur border-birthday-gold/30 animate-fade-in">
          <p className="text-lg font-medium text-birthday-purple leading-relaxed">
            {currentMessage}
          </p>
        </Card>
      )}

      <div className="text-center text-sm text-muted-foreground">
        {revealedMessages.length > 0 && (
          <p>Messages revealed: {revealedMessages.length}/{surpriseMessages.length}</p>
        )}
      </div>
    </div>
  );
};