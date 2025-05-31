
import { useState, useCallback } from 'react';
import { SpeedTestResult } from '@/pages/Index';
import { MetricType, Metrics } from '@/types/speedTest';
import { simulateMetricTest } from '@/utils/speedTestSimulation';
import { getConnectionInfo } from '@/utils/connectionInfo';

export const useSpeedTest = (onTestComplete: (result: SpeedTestResult) => void) => {
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentMetric, setCurrentMetric] = useState<MetricType | null>(null);
  const [progress, setProgress] = useState(0);
  const [metrics, setMetrics] = useState<Metrics>({
    downloadSpeed: 0,
    uploadSpeed: 0,
    ping: 0,
    jitter: 0
  });

  const startTest = useCallback(async () => {
    setIsRunning(true);
    setHasStarted(true);
    setProgress(0);
    
    // Updated sequence: Download → Upload → Ping → Jitter
    const testSequence: MetricType[] = ['download', 'upload', 'ping', 'jitter'];
    const newMetrics: Metrics = {
      downloadSpeed: 0,
      uploadSpeed: 0,
      ping: 0,
      jitter: 0
    };

    try {
      for (const metric of testSequence) {
        setCurrentMetric(metric);
        setProgress(0);
        
        const value = await simulateMetricTest(metric, setProgress);
        
        switch (metric) {
          case 'ping':
            newMetrics.ping = value;
            break;
          case 'jitter':
            newMetrics.jitter = value;
            break;
          case 'download':
            newMetrics.downloadSpeed = value;
            break;
          case 'upload':
            newMetrics.uploadSpeed = value;
            break;
        }
        
        setMetrics({ ...newMetrics });
        
        // Small delay between tests
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Create test result
      const connectionInfo = getConnectionInfo();
      const result: SpeedTestResult = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        downloadSpeed: newMetrics.downloadSpeed,
        uploadSpeed: newMetrics.uploadSpeed,
        ping: newMetrics.ping,
        jitter: newMetrics.jitter,
        connectionType: connectionInfo.connectionType,
        provider: connectionInfo.provider
      };

      onTestComplete(result);
      
    } catch (error) {
      console.error('Speed test error:', error);
    } finally {
      setIsRunning(false);
      setCurrentMetric(null);
      setProgress(0);
    }
  }, [onTestComplete]);

  const resetTest = useCallback(() => {
    setMetrics({
      downloadSpeed: 0,
      uploadSpeed: 0,
      ping: 0,
      jitter: 0
    });
    setCurrentMetric(null);
    setProgress(0);
    setIsRunning(false);
    setHasStarted(false);
  }, []);

  return {
    isRunning,
    hasStarted,
    currentMetric,
    metrics,
    progress,
    startTest,
    resetTest
  };
};
