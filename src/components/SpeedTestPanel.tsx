
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';
import { SpeedTestResult } from '@/pages/Index';
import { MetricDisplay } from '@/components/MetricDisplay';
import { GoButton } from '@/components/GoButton';
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
    resetTest,
    hasStarted
  } = useSpeedTest(onTestComplete);

  return (
    <div className="max-w-6xl mx-auto">
      {!hasStarted || isRunning ? (
        // Show GO button when test hasn't started or is running
        <div className="flex justify-center mb-8">
          <GoButton 
            isRunning={isRunning}
            currentMetric={currentMetric}
            progress={progress}
            onStart={startTest}
          />
        </div>
      ) : (
        // Show metrics grid after test completion
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-200">
            <CardContent className="p-4">
              <MetricDisplay
                label="Download"
                value={metrics.downloadSpeed}
                unit="Mbps"
                isActive={false}
                isCompleted={true}
                progress={0}
              />
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-200">
            <CardContent className="p-4">
              <MetricDisplay
                label="Upload"
                value={metrics.uploadSpeed}
                unit="Mbps"
                isActive={false}
                isCompleted={true}
                progress={0}
              />
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-200">
            <CardContent className="p-4">
              <MetricDisplay
                label="Ping"
                value={metrics.ping}
                unit="ms"
                isActive={false}
                isCompleted={true}
                progress={0}
              />
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-200">
            <CardContent className="p-4">
              <MetricDisplay
                label="Jitter"
                value={metrics.jitter}
                unit="ms"
                isActive={false}
                isCompleted={true}
                progress={0}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* Control Panel */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
        <CardContent className="p-6">
          <div className="flex justify-center">
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
        </CardContent>
      </Card>
    </div>
  );
};
