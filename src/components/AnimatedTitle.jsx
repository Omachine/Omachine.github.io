import { useState, useEffect } from 'react';

export default function AnimatedTitle({ titles = [] }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (titles.length === 0) return;

    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsChanging(false);
      }, 300);
    }, 3500); // Change title every 3.5 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="h-12 flex items-center">
      <h2
        className={`text-3xl md:text-4xl font-bold text-ctp-mauve transition-opacity duration-300 ${
          isChanging ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {titles[currentTitleIndex]}
      </h2>
    </div>
  );
}
