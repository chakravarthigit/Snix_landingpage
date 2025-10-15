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
    // Create initial coins
    const initialCoins = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth - 60),
      y: -50 - Math.random() * 300,
      image: coinImages[i % coinImages.length],
      size: 35 + Math.random() * 25, // 35-60px
      speed: 1.5 + Math.random() * 2.5, // 1.5-4px per frame
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

  const handleMouseDown = (e: React.MouseEvent, coinId: number) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    setCoins(prev => prev.map(coin => 
      coin.id === coinId 
        ? { ...coin, isDragging: true, dragOffset: { x: offsetX, y: offsetY } }
        : coin
    ));

    const handleMouseMove = (e: MouseEvent) => {
      setCoins(prev => prev.map(coin => 
        coin.id === coinId && coin.isDragging
          ? { 
              ...coin, 
              x: e.clientX - coin.dragOffset.x, 
              y: e.clientY - coin.dragOffset.y 
            }
          : coin
      ));
    };

    const handleMouseUp = () => {
      setCoins(prev => prev.map(coin => 
        coin.id === coinId 
          ? { ...coin, isDragging: false }
          : coin
      ));
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
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
          className="absolute pointer-events-auto cursor-grab active:cursor-grabbing select-none"
          style={{
            left: coin.x,
            top: coin.y,
            width: coin.size,
            height: coin.size,
            transform: `rotate(${coin.rotation}deg)`,
            transition: coin.isDragging ? 'none' : 'transform 0.1s ease-out',
          }}
          onMouseDown={(e) => handleMouseDown(e, coin.id)}
          onClick={() => !coin.isDragging && handleClick(coin)}
        >
          <img
            src={coin.image}
            alt="Crypto coin"
            className="w-full h-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-200 hover:scale-110"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) brightness(1.05)',
            }}
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
