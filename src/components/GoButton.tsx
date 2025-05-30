
import { useEffect, useState } from 'react';

interface GoButtonProps {
  isRunning: boolean;
  currentMetric: string | null;
  progress: number;
  onStart: () => void;
}

export const GoButton = ({ isRunning, currentMetric, progress, onStart }: GoButtonProps) => {
  const [showIntenseRipple, setShowIntenseRipple] = useState(false);

  useEffect(() => {
    if (isRunning) {
      setShowIntenseRipple(true);
    } else {
      setShowIntenseRipple(false);
    }
  }, [isRunning]);

  const getStepProgress = () => {
    if (!currentMetric) return 0;
    
    const steps = ['download', 'upload', 'ping', 'jitter'];
    const currentStepIndex = steps.indexOf(currentMetric);
    const stepProgress = (currentStepIndex * 25) + (progress * 0.25);
    
    return Math.min(stepProgress, 100);
  };

  const getCurrentStepText = () => {
    if (!currentMetric) return 'GO';
    
    const stepNames = {
      download: 'Testing Download...',
      upload: 'Testing Upload...',
      ping: 'Testing Ping...',
      jitter: 'Testing Jitter...'
    };
    
    return stepNames[currentMetric as keyof typeof stepNames] || 'Testing...';
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer ripple effects */}
      <div 
        className={`
          absolute w-96 h-96 rounded-full border-4 opacity-20 animate-ping
          ${showIntenseRipple ? 'border-purple-500' : 'border-blue-400'}
        `}
      />
      <div 
        className={`
          absolute w-80 h-80 rounded-full border-4 opacity-30 animate-pulse
          ${showIntenseRipple ? 'border-pink-500' : 'border-blue-500'}
        `}
      />
      <div 
        className={`
          absolute w-64 h-64 rounded-full border-4 opacity-40 animate-ping
          ${showIntenseRipple ? 'border-orange-500' : 'border-blue-600'}
        `}
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Main button container */}
      <div className="relative">
        {/* Progress ring */}
        {isRunning && (
          <svg className="absolute inset-0 w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="3"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              strokeDasharray="283"
              strokeDashoffset={283 - (getStepProgress() / 100) * 283}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="25%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#EC4899" />
                <stop offset="75%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>
        )}
        
        {/* Main GO button */}
        <button
          onClick={onStart}
          disabled={isRunning}
          className={`
            relative w-48 h-48 rounded-full text-4xl font-bold text-white
            transition-all duration-300 transform hover:scale-105 disabled:transform-none
            shadow-2xl
            ${isRunning 
              ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 animate-pulse' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            }
          `}
          aria-label={isRunning ? 'Speed test in progress' : 'Start speed test'}
        >
          {/* Button ripple effect */}
          {showIntenseRipple && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 animate-ping"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-20 animate-pulse"></div>
            </>
          )}
          
          <span className="relative z-10 text-center">
            {isRunning ? (
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold mb-1">
                  {Math.round(getStepProgress())}%
                </div>
                <div className="text-sm opacity-90">
                  {getCurrentStepText().replace('Testing ', '').replace('...', '')}
                </div>
              </div>
            ) : (
              'GO'
            )}
          </span>
        </button>
      </div>
    </div>
  );
};
