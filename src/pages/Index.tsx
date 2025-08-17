import { useState } from "react";
import { BirthdayHero } from "@/components/birthday/BirthdayHero";
import { BirthdayCake } from "@/components/birthday/BirthdayCake";
import { SurpriseMessages } from "@/components/birthday/SurpriseMessages";
import { FloatingBalloon } from "@/components/birthday/FloatingBalloon";
import { ConfettiRain } from "@/components/birthday/ConfettiRain";
import { ScrollAnimated } from "@/components/ScrollAnimated";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-birthday-dark via-birthday-magic/30 to-birthday-dark">
      {/* Hero Section */}
      <BirthdayHero name="Amazing Girl" />

      {/* Interactive Sections with Scroll Animations */}
      <div className="relative z-10 space-y-32 pb-20">
        {/* Birthday Cake Section */}
        <ScrollAnimated animation="scale" delay={200}>
          <section className="container mx-auto px-6">
            <ScrollAnimated animation="slideLeft" delay={400}>
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold birthday-gradient bg-clip-text text-transparent mb-6">
                  🎂 Make a Wish! 🎂
                </h2>
                <p className="text-xl text-birthday-purple font-medium">
                  Blow out the candles and let the magic happen!
                </p>
              </div>
            </ScrollAnimated>
            <ScrollAnimated animation="up" delay={600}>
              <div className="flex justify-center">
                <BirthdayCake />
              </div>
            </ScrollAnimated>
          </section>
        </ScrollAnimated>

        {/* Surprise Messages Section */}
        <ScrollAnimated animation="slideRight" delay={800}>
          <section className="container mx-auto px-6">
            <ScrollAnimated animation="fade" delay={1000}>
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold birthday-gradient bg-clip-text text-transparent mb-6">
                  💌 Special Messages 💌
                </h2>
                <p className="text-xl text-birthday-purple font-medium">
                  Discover heartfelt messages just for you!
                </p>
              </div>
            </ScrollAnimated>
            <ScrollAnimated animation="scale" delay={1200}>
              <div className="flex justify-center">
                <SurpriseMessages />
              </div>
            </ScrollAnimated>
          </section>
        </ScrollAnimated>

        {/* Extra Floating Elements with Scroll Triggers */}
        <ScrollAnimated animation="slideLeft" delay={400}>
          <div className="fixed bottom-10 left-10 z-20">
            <FloatingBalloon color="purple" delay={0} onClick={triggerConfetti} />
          </div>
        </ScrollAnimated>
        <ScrollAnimated animation="slideRight" delay={600}>
          <div className="fixed bottom-20 right-10 z-20">
            <FloatingBalloon color="gold" delay={800} onClick={triggerConfetti} />
          </div>
        </ScrollAnimated>

        {/* Final Message with Grand Entrance */}
        <ScrollAnimated animation="up" delay={1000}>
          <section className="container mx-auto px-6 text-center">
            <div className="p-12 magic-blur rounded-3xl border border-birthday-pink/30 shadow-2xl max-w-3xl mx-auto"
                 style={{ boxShadow: '0 0 60px hsl(var(--birthday-purple) / 0.4), 0 0 100px hsl(var(--birthday-pink) / 0.2)' }}>
              <ScrollAnimated animation="scale" delay={1200}>
                <h3 className="text-4xl font-bold birthday-gradient bg-clip-text text-transparent mb-8">
                  ✨ You Are Absolutely Amazing! ✨
                </h3>
              </ScrollAnimated>
              <ScrollAnimated animation="fade" delay={1400}>
                <p className="text-xl text-birthday-purple leading-relaxed font-medium">
                  Today and every day, remember how special you are. 
                  Your light brightens the world and brings joy to everyone around you. 
                  Here's to another year of beautiful memories and magical moments! 🌟
                </p>
              </ScrollAnimated>
            </div>
          </section>
        </ScrollAnimated>
      </div>

      {/* Global Confetti */}
      <ConfettiRain active={showConfetti} />
    </div>
  );
};

export default Index;
