export const HeroContent = () => {
  return (
    <div className="relative z-[2] flex flex-col items-center justify-center text-center space-y-5 md:space-y-6 max-w-[90vw] md:max-w-4xl mx-auto px-4 -translate-y-8">
      <h1 className="font-inter text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.02em] opacity-0 animate-[fadeIn_3s_ease-out_forwards]">
        <span className="text-white inline-block transition-transform duration-300 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          Cre8tive AI
        </span>
      </h1>
      <p className="font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.01em] text-white/90 opacity-0 animate-[fadeIn_3s_ease-out_forwards] [text-shadow:0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(255,255,255,0.2)]">
        Cutting Edge AI Solutions For Your Business
      </p>
    </div>
  );
};