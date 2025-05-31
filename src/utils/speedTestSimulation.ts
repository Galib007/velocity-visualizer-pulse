
import { MetricType } from '@/types/speedTest';

export const simulateMetricTest = async (
  metric: MetricType,
  setProgress: (progress: number) => void
): Promise<number> => {
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
