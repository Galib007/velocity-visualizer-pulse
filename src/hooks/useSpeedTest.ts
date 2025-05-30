
import { useState, useCallback } from 'react';
import { SpeedTestResult } from '@/pages/Index';

type MetricType = 'ping' | 'jitter' | 'download' | 'upload';

interface Metrics {
  downloadSpeed: number;
  uploadSpeed: number;
  ping: number;
  jitter: number;
}

export const useSpeedTest = (onTestComplete: (result: SpeedTestResult) => void) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentMetric, setCurrentMetric] = useState<MetricType | null>(null);
  const [progress, setProgress] = useState(0);
  const [metrics, setMetrics] = useState<Metrics>({
    downloadSpeed: 0,
    uploadSpeed: 0,
    ping: 0,
    jitter: 0
  });

  const simulateMetricTest = async (metric: MetricType): Promise<number> => {
    const duration = 3000; // 3 seconds per test
    const steps = 30;
    const stepDuration = duration / steps;
    
    return new Promise((resolve) => {
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progressPercent = (currentStep / steps) * 100;
        setProgress(progressPercent);
        
        if (currentStep >= steps) {
          clearInterval(interval);
          
          // Simulate realistic values based on metric type
          let value: number;
          switch (metric) {
            case 'ping':
              value = Math.random() * 50 + 10; // 10-60ms
              break;
            case 'jitter':
              value = Math.random() * 10 + 1; // 1-11ms
              break;
            case 'download':
              value = Math.random() * 100 + 20; // 20-120 Mbps
              break;
            case 'upload':
              value = Math.random() * 50 + 10; // 10-60 Mbps
              break;
            default:
              value = 0;
          }
          
          resolve(value);
        }
      }, stepDuration);
    });
  };

  const getConnectionInfo = () => {
    // Simulate connection detection
    const connectionTypes = ['WiFi', '4G', '5G', 'Fiber', 'Cable', 'DSL'];
    const providers = ['Verizon', 'AT&T', 'Comcast', 'Spectrum', 'T-Mobile', 'Local ISP'];
    
    return {
      connectionType: connectionTypes[Math.floor(Math.random() * connectionTypes.length)],
      provider: providers[Math.floor(Math.random() * providers.length)]
    };
  };

  const startTest = useCallback(async () => {
    setIsRunning(true);
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
        
        const value = await simulateMetricTest(metric);
        
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
  }, []);

  return {
    isRunning,
    currentMetric,
    metrics,
    progress,
    startTest,
    resetTest
  };
};
