import Canvas from './Canvas';

export default function HeroCanvas() {
  return (
    <Canvas className="relative" id="hero">
      <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
        {/* Logo */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4">THRIVE</h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white">HAPPENS</h1>
        </div>
        
        {/* Swipe prompt */}
        <div className="absolute bottom-8 text-center animate-bounce flex flex-col items-center">
          <p className="text-sm md:text-base text-white/80 mb-2">Swipe</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6 text-white/80"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </Canvas>
  );
} 