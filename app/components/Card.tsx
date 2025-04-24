import { useState, ReactNode } from 'react';

interface BaseCardProps {
  title: string;
  isActive: boolean;
  className?: string;
  onClick?: () => void;
  imageUrl?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  isActive,
  className = "",
  onClick,
  imageUrl,
  children
}: BaseCardProps) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className={`keen-slider__slide ${isActive ? 'active' : ''}`}>
      <div 
        className={`transition-all duration-500 ease-out transform ${
          isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-50'
        }`}
      >
        <div 
          className={`bg-forest-green rounded-lg overflow-hidden shadow-lg w-[90vw] md:w-[500px] max-w-[500px] h-[600px] md:h-[650px] flex flex-col cursor-pointer relative ${className}`}
          onClick={isActive && onClick ? onClick : undefined}
        >
          {imageUrl && (
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={imageError ? '/assets/placeholder.jpeg' : imageUrl}
                alt={title}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="mt-auto p-6 bg-forest-green text-center relative z-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 