import { useState, useEffect } from "react";
import { Moon, Coins } from "lucide-react";

interface ControlPanelProps {
  onToggleCoins: () => void;
  coinsActive: boolean;
}

export default function ControlPanel({ onToggleCoins, coinsActive }: ControlPanelProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
    // Apply dark mode to document
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Save preference
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    // Apply to document
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="fixed top-6 right-6 z-[100] flex gap-4">
      {/* Dark Mode Toggle Switch */}
      <div className="flex items-center gap-2">
        <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        <button
          onClick={toggleDarkMode}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            darkMode ? 'bg-blue-600' : 'bg-gray-200'
          }`}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              darkMode ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      {/* Coin Animation Toggle Switch */}
      <div className="flex items-center gap-2">
        <Coins className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        <button
          onClick={onToggleCoins}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
            coinsActive ? 'bg-green-600' : 'bg-gray-200'
          }`}
          title={coinsActive ? "Stop Coin Animation" : "Start Coin Animation"}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              coinsActive ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
