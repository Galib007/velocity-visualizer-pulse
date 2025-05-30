
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Download, Upload, Timer, Activity } from 'lucide-react';
import { SpeedTestResult } from '@/pages/Index';

interface TestHistoryProps {
  history: SpeedTestResult[];
  onClearHistory: () => void;
}

export const TestHistory = ({ history, onClearHistory }: TestHistoryProps) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const formatSpeed = (speed: number) => {
    return `${speed.toFixed(1)} Mbps`;
  };

  const formatLatency = (latency: number) => {
    return `${latency.toFixed(0)} ms`;
  };

  return (
    <Card className="max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          Test History
        </CardTitle>
        <Button
          onClick={onClearHistory}
          variant="outline"
          size="sm"
          className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear History
        </Button>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {history.map((test) => (
            <div 
              key={test.id}
              className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
                <div className="flex flex-col space-y-1">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(test.timestamp)}
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {test.connectionType} • {test.provider}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Download className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Download</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {formatSpeed(test.downloadSpeed)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Upload className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Upload</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {formatSpeed(test.uploadSpeed)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Timer className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Ping</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {formatLatency(test.ping)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Activity className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Jitter</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {formatLatency(test.jitter)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
