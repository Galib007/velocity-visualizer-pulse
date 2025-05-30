
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, RotateCcw } from 'lucide-react';
import { SpeedTestResult } from '@/pages/Index';
import { MetricDisplay } from '@/components/MetricDisplay';
import { useSpeedTest } from '@/hooks/useSpeedTest';

interface SpeedTestPanelProps {
  onTestComplete: (result: SpeedTestResult) => void;
}

export const SpeedTestPanel = ({ onTestComplete }: SpeedTestPanelProps) => {
  const {
    isRunning,
    currentMetric,
    metrics,
    progress,
    startTest,
    resetTest
  } = useSpeedTest(onTestComplete);

  return (
    <Card className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
      <CardContent className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <MetricDisplay
            label="Download"
            value={metrics.downloadSpeed}
            unit="Mbps"
            isActive={currentMetric === 'download'}
            isCompleted={metrics.downloadSpeed > 0 && currentMetric !== 'download'}
            progress={currentMetric === 'download' ? progress : 0}
          />
          
          <MetricDisplay
            label="Upload"
            value={metrics.uploadSpeed}
            unit="Mbps"
            isActive={currentMetric === 'upload'}
            isCompleted={metrics.uploadSpeed > 0 && currentMetric !== 'upload'}
            progress={currentMetric === 'upload' ? progress : 0}
          />
          
          <MetricDisplay
            label="Ping"
            value={metrics.ping}
            unit="ms"
            isActive={currentMetric === 'ping'}
            isCompleted={metrics.ping > 0 && currentMetric !== 'ping'}
            progress={currentMetric === 'ping' ? progress : 0}
          />
          
          <MetricDisplay
            label="Jitter"
            value={metrics.jitter}
            unit="ms"
            isActive={currentMetric === 'jitter'}
            isCompleted={metrics.jitter > 0 && currentMetric !== 'jitter'}
            progress={currentMetric === 'jitter' ? progress : 0}
          />
        </div>

        <div className="flex justify-center space-x-4">
          <Button
            onClick={startTest}
            disabled={isRunning}
            className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:transform-none"
            aria-label="Start speed test"
          >
            <Play className="mr-2 h-5 w-5" />
            {isRunning ? 'Testing...' : 'Start Test'}
          </Button>
          
          <Button
            onClick={resetTest}
            variant="outline"
            className="px-6 py-3 text-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-700"
            aria-label="Reset test results"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Reset
          </Button>
        </div>

        {isRunning && (
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Testing {currentMetric}...
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
