import { useEffect, useState, useRef } from "react";

interface Coin {
  id: number;
  x: number;
  y: number;
  image: string;
  size: number;
  speed: number;
  rotation: number;
  isDragging: boolean;
  dragOffset: { x: number; y: number };
}

const coinImages = [
  '/assets/coins/bitcoin.png',
  '/assets/coins/etherum.png',
  '/assets/coins/solana.png',
  '/assets/coins/cardano.png',
  '/assets/coins/binance.png',
  '/assets/coins/polygon.png',
  '/assets/coins/tether.png',
  '/assets/coins/shiba-inu.png',
  '/assets/coins/tron.png',
  '/assets/coins/dollar.png',
  '/assets/coins/coin.png',
  '/assets/coins/coin_e.png',
  '/assets/coins/C.png',
];

interface FloatingCoinsProps {
  isActive?: boolean;
}

export default function FloatingCoins({ isActive = true }: FloatingCoinsProps) {
  const [coins, setCoins] = useState<Coin[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Only create coins if active and window is available
    if (!isActive || typeof window === 'undefined') return;

    // Create initial coins with reduced count for better performance
    const initialCoins = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth - 60),
      y: -50 - Math.random() * 300,
      image: coinImages[i % coinImages.length],
      size: 35 + Math.random() * 20, // 35-55px (reduced size range)
      speed: 1 + Math.random() * 2, // 1-3px per frame (reduced speed)
      rotation: 0,
      isDragging: false,
      dragOffset: { x: 0, y: 0 },
    }));
    
    setCoins(initialCoins);

    // Animation loop
    const animate = () => {
      if (!isActive) {
        animationRef.current = requestAnimationFrame(animate);
        return; // Don't animate when inactive
      }

      setCoins(prevCoins => 
        prevCoins.map(coin => {
          if (coin.isDragging) {
            return coin; // Don't animate dragged coins
          }
          
          const newY = coin.y + coin.speed;
          const newRotation = coin.rotation + 1.5;
          
          // Reset coin to top when it goes off screen
          if (newY > window.innerHeight + 100) {
            return {
              ...coin,
              y: -50 - Math.random() * 300,
              x: Math.random() * (window.innerWidth - 60),
              speed: 1.5 + Math.random() * 2.5,
              rotation: 0,
              image: coinImages[Math.floor(Math.random() * coinImages.length)],
            };
          }
          
          return {
            ...coin,
            y: newY,
            rotation: newRotation,
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  const handlePointerDown = (e: React.PointerEvent, coinId: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Capture the pointer for better mobile support
    e.currentTarget.setPointerCapture(e.pointerId);
    
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setCoins(prev => prev.map(coin => 
      coin.id === coinId 
        ? { ...coin, isDragging: true, dragOffset: { x: offsetX, y: offsetY } }
        : coin
    ));

    const handlePointerMove = (e: PointerEvent) => {
      e.preventDefault();
      setCoins(prev => prev.map(coin => 
        coin.id === coinId && coin.isDragging
          ? { 
              ...coin, 
              x: Math.max(0, Math.min(window.innerWidth - coin.size, e.clientX - coin.dragOffset.x)), 
              y: Math.max(0, Math.min(window.innerHeight - coin.size, e.clientY - coin.dragOffset.y))
            }
          : coin
      ));
    };

    const handlePointerUp = () => {
      setCoins(prev => prev.map(coin => 
        coin.id === coinId 
          ? { ...coin, isDragging: false }
          : coin
      ));
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('pointercancel', handlePointerUp);
    };

    document.addEventListener('pointermove', handlePointerMove, { passive: false });
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('pointercancel', handlePointerUp);
  };

  // Fallback touch handlers for older browsers that don't support pointer events
  const handleTouchStart = (e: React.TouchEvent, coinId: number) => {
    // Only use touch handlers if pointer events are not supported
    if ('onpointerdown' in window) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = touch.clientX - rect.left;
    const offsetY = touch.clientY - rect.top;

    setCoins(prev => prev.map(coin => 
      coin.id === coinId 
        ? { ...coin, isDragging: true, dragOffset: { x: offsetX, y: offsetY } }
        : coin
    ));

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touch) {
        setCoins(prev => prev.map(coin => 
          coin.id === coinId && coin.isDragging
            ? { 
                ...coin, 
                x: Math.max(0, Math.min(window.innerWidth - coin.size, touch.clientX - coin.dragOffset.x)), 
                y: Math.max(0, Math.min(window.innerHeight - coin.size, touch.clientY - coin.dragOffset.y))
              }
            : coin
        ));
      }
    };

    const handleTouchEnd = () => {
      setCoins(prev => prev.map(coin => 
        coin.id === coinId 
          ? { ...coin, isDragging: false }
          : coin
      ));
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchEnd);
  };

  const handleClick = (coin: Coin) => {
    console.log('Coin clicked!', coin.image);
    // Add click effect - maybe make it spin faster temporarily
    setCoins(prev => prev.map(c => 
      c.id === coin.id 
        ? { ...c, rotation: c.rotation + 180 }
        : c
    ));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="absolute pointer-events-auto cursor-grab active:cursor-grabbing select-none touch-none"
          style={{
            left: coin.x,
            top: coin.y,
            width: coin.size,
            height: coin.size,
            transform: `rotate(${coin.rotation}deg) ${coin.isDragging ? 'scale(1.1)' : 'scale(1)'}`,
            transition: coin.isDragging ? 'none' : 'transform 0.1s ease-out',
            touchAction: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
            WebkitTapHighlightColor: 'transparent',
            zIndex: coin.isDragging ? 1000 : 'auto',
          }}
          onPointerDown={(e) => handlePointerDown(e, coin.id)}
          onTouchStart={(e) => handleTouchStart(e, coin.id)}
          onClick={() => !coin.isDragging && handleClick(coin)}
        >
          <img
            src={coin.image}
            alt="Crypto coin"
            className="w-full h-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-200 pointer-events-none"
            style={{
              filter: `drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) brightness(1.05) ${coin.isDragging ? 'brightness(1.2)' : ''}`,
              touchAction: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitUserDrag: 'none' as any,
            } as React.CSSProperties}
            draggable={false}
            onError={(e) => {
              // Fallback to a default coin if image fails to load
              const target = e.currentTarget;
              target.src = '/assets/coins/bitcoin.png';
            }}
          />
        </div>
      ))}
    </div>
  );
}
