
import { useState, useEffect } from 'react';
import { SpeedTestPanel } from '@/components/SpeedTestPanel';
import { TestHistory } from '@/components/TestHistory';
import { ConnectionInfo } from '@/components/ConnectionInfo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export interface SpeedTestResult {
  id: string;
  timestamp: number;
  downloadSpeed: number;
  uploadSpeed: number;
  ping: number;
  jitter: number;
  connectionType: string;
  provider: string;
}

const Index = () => {
  const [testHistory, setTestHistory] = useState<SpeedTestResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load test history from localStorage
    const savedHistory = localStorage.getItem('speedTestHistory');
    if (savedHistory) {
      try {
        setTestHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error loading test history:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const addTestResult = (result: SpeedTestResult) => {
    const updatedHistory = [result, ...testHistory].slice(0, 10); // Keep last 10 tests
    setTestHistory(updatedHistory);
    localStorage.setItem('speedTestHistory', JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setTestHistory([]);
    localStorage.removeItem('speedTestHistory');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in">
            Free Internet Speed Test
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Measure your real-time internet speed and track your history. Fast, accurate, and privacy-first.
          </p>
        </section>

        {/* Connection Info */}
        <ConnectionInfo />

        {/* Speed Test Panel */}
        <SpeedTestPanel onTestComplete={addTestResult} />

        {/* Test History */}
        {testHistory.length > 0 && (
          <TestHistory history={testHistory} onClearHistory={clearHistory} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
