
import { useEffect, useState } from 'react';

interface MetricDisplayProps {
  label: string;
  value: number;
  unit: string;
  isActive: boolean;
  isCompleted: boolean;
  progress: number;
}

export const MetricDisplay = ({ 
  label, 
  value, 
  unit, 
  isActive, 
  isCompleted, 
  progress 
}: MetricDisplayProps) => {
  const [showRipple, setShowRipple] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShowRipple(true);
    } else {
      setShowRipple(false);
    }
  }, [isActive]);

  const formatValue = (val: number) => {
    if (val === 0) return '--';
    return val.toFixed(1);
  };

  return (
    <div className="relative">
      <div 
        className={`
          relative p-6 rounded-2xl text-center transition-all duration-500 transform
          ${isActive ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-105 shadow-xl' : 
            isCompleted ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg' :
            'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}
        `}
      >
        {/* Ripple Effect */}
        {showRipple && (
          <>
            <div className="absolute inset-0 rounded-2xl animate-ping bg-blue-400 opacity-20"></div>
            <div className="absolute inset-0 rounded-2xl animate-pulse bg-purple-400 opacity-30"></div>
          </>
        )}
        
        {/* Progress Circle for Active Metric */}
        {isActive && (
          <div className="absolute inset-2">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
                strokeDasharray={`${progress * 2.83} 283`}
                className="transition-all duration-300"
              />
            </svg>
          </div>
        )}
        
        <div className="relative z-10">
          <div className="text-2xl md:text-3xl font-bold mb-1">
            {formatValue(value)}
          </div>
          <div className="text-sm opacity-80 mb-2">{unit}</div>
          <div className="text-xs font-medium uppercase tracking-wider">
            {label}
          </div>
        </div>
        
        {/* Completion Glow Effect */}
        {isCompleted && (
          <div className="absolute inset-0 rounded-2xl bg-green-400 opacity-20 animate-pulse"></div>
        )}
      </div>
    </div>
  );
};
