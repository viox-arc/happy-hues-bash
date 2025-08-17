import { useState } from "react";
import { BirthdayHero } from "@/components/birthday/BirthdayHero";
import { BirthdayCake } from "@/components/birthday/BirthdayCake";
import { SurpriseMessages } from "@/components/birthday/SurpriseMessages";
import { FloatingBalloon } from "@/components/birthday/FloatingBalloon";
import { ConfettiRain } from "@/components/birthday/ConfettiRain";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-birthday-soft via-background to-birthday-magic">
      {/* Hero Section */}
      <BirthdayHero name="Amazing Girl" />

      {/* Interactive Sections */}
      <div className="relative z-10 space-y-20 pb-20">
        {/* Birthday Cake Section */}
        <section className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold birthday-gradient bg-clip-text text-transparent mb-4">
              🎂 Make a Wish! 🎂
            </h2>
            <p className="text-lg text-birthday-purple">
              Blow out the candles and let the magic happen!
            </p>
          </div>
          <div className="flex justify-center">
            <BirthdayCake />
          </div>
        </section>

        {/* Surprise Messages Section */}
        <section className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold birthday-gradient bg-clip-text text-transparent mb-4">
              💌 Special Messages 💌
            </h2>
            <p className="text-lg text-birthday-purple">
              Discover heartfelt messages just for you!
            </p>
          </div>
          <div className="flex justify-center">
            <SurpriseMessages />
          </div>
        </section>

        {/* Extra Floating Elements */}
        <div className="fixed bottom-10 left-10 z-20">
          <FloatingBalloon color="purple" delay={0} onClick={triggerConfetti} />
        </div>
        <div className="fixed bottom-20 right-10 z-20">
          <FloatingBalloon color="gold" delay={800} onClick={triggerConfetti} />
        </div>

        {/* Final Message */}
        <section className="container mx-auto px-6 text-center">
          <div className="p-12 magic-blur rounded-3xl border border-birthday-pink/20 magical-shadow max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold birthday-gradient bg-clip-text text-transparent mb-6">
              ✨ You Are Absolutely Amazing! ✨
            </h3>
            <p className="text-xl text-birthday-purple leading-relaxed">
              Today and every day, remember how special you are. 
              Your light brightens the world and brings joy to everyone around you. 
              Here's to another year of beautiful memories and magical moments! 🌟
            </p>
          </div>
        </section>
      </div>

      {/* Global Confetti */}
      <ConfettiRain active={showConfetti} />
    </div>
  );
};

export default Index;
