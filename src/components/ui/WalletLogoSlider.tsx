import { motion } from "framer-motion";

const walletLogos = [
  '/assets/loogs/metamask-icon.png',
  '/assets/loogs/bnb-bnb-logo.png',
  '/assets/loogs/ethereum-pow-ethw-logo.png',
  '/assets/loogs/cardano-ada-logo.png',
  '/assets/loogs/chainlink-link-logo.png',
  '/assets/loogs/uniswap-uni-logo.png',
  '/assets/loogs/polkadot-new-dot-logo.png',
  '/assets/loogs/stellar-xlm-logo.png',
  '/assets/loogs/compound-comp-logo.png',
  '/assets/loogs/arbitrum-arb-logo.png',
  '/assets/loogs/basic-attention-token-bat-logo.png',
  '/assets/loogs/decentraland-mana-logo.png',
  '/assets/loogs/flow-flow-logo.png',
  '/assets/loogs/frax-frax-logo.png',
  '/assets/loogs/jupiter-ag-jup-logo.png',
  '/assets/loogs/kadena-kda-logo.png',
  '/assets/loogs/kucoin-token-kcs-logo.png',
  '/assets/loogs/mantra-om-logo.png',
  '/assets/loogs/nervos-network-ckb-logo.png',
  '/assets/loogs/safepal-sfp-logo.png',
  '/assets/loogs/thorchain-rune-logo.png',
  '/assets/loogs/wanchain-wan-logo.png'
];

// Split logos into two rows
const firstRowLogos = walletLogos.slice(0, Math.ceil(walletLogos.length / 2));
const secondRowLogos = walletLogos.slice(Math.ceil(walletLogos.length / 2));

interface LogoRowProps {
  logos: string[];
  direction: "left" | "right";
  speed?: number;
}

function LogoRow({ logos, direction, speed = 50 }: LogoRowProps) {
  const duplicatedLogos = [...logos, ...logos, ...logos]; // Triple for seamless loop
  
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex gap-8 items-center"
        animate={{
          x: direction === "left" ? [0, -100 * logos.length] : [-100 * logos.length, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ width: `${duplicatedLogos.length * 120}px` }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-xl p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600"
          >
            <img
              src={logo}
              alt={`Wallet ${index + 1}`}
              className="w-full h-full object-contain filter hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function WalletLogoSlider() {
  return (
    <div className="w-full space-y-4">
      {/* First row - sliding left */}
      <LogoRow logos={firstRowLogos} direction="left" speed={60} />
      
      {/* Second row - sliding right */}
      <LogoRow logos={secondRowLogos} direction="right" speed={55} />
    </div>
  );
}
