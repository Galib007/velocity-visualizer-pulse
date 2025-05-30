
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trash2, Download, Upload, Timer, Activity, Filter } from 'lucide-react';
import { SpeedTestResult } from '@/pages/Index';

interface TestHistoryProps {
  history: SpeedTestResult[];
  onClearHistory: () => void;
}

type TimeFilter = 'all' | '24h' | '7d' | '30d';

export const TestHistory = ({ history, onClearHistory }: TestHistoryProps) => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');

  useEffect(() => {
    // Load saved filter preference
    const savedFilter = localStorage.getItem('speedTestHistoryFilter') as TimeFilter;
    if (savedFilter) {
      setTimeFilter(savedFilter);
    }
  }, []);

  const handleFilterChange = (value: TimeFilter) => {
    setTimeFilter(value);
    localStorage.setItem('speedTestHistoryFilter', value);
  };

  const getFilteredHistory = () => {
    if (timeFilter === 'all') return history;
    
    const now = Date.now();
    const timeRanges = {
      '24h': 24 * 60 * 60 * 1000, // 24 hours in ms
      '7d': 7 * 24 * 60 * 60 * 1000, // 7 days in ms
      '30d': 30 * 24 * 60 * 60 * 1000, // 30 days in ms
    };
    
    const cutoffTime = now - timeRanges[timeFilter];
    return history.filter(test => test.timestamp >= cutoffTime);
  };

  const filteredHistory = getFilteredHistory();

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const formatSpeed = (speed: number) => {
    return `${speed.toFixed(1)} Mbps`;
  };

  const formatLatency = (latency: number) => {
    return `${latency.toFixed(0)} ms`;
  };

  const getFilterLabel = (filter: TimeFilter) => {
    switch (filter) {
      case 'all': return 'All Time';
      case '24h': return 'Last 24 Hours';
      case '7d': return 'Last Week';
      case '30d': return 'Last Month';
      default: return 'All Time';
    }
  };

  return (
    <Card className="max-w-6xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Test History
        </CardTitle>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Select value={timeFilter} onValueChange={handleFilterChange}>
              <SelectTrigger className="w-full sm:w-[180px] bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 z-50">
                <SelectItem value="all" className="hover:bg-gray-100 dark:hover:bg-gray-600">All Time</SelectItem>
                <SelectItem value="24h" className="hover:bg-gray-100 dark:hover:bg-gray-600">Last 24 Hours</SelectItem>
                <SelectItem value="7d" className="hover:bg-gray-100 dark:hover:bg-gray-600">Last Week</SelectItem>
                <SelectItem value="30d" className="hover:bg-gray-100 dark:hover:bg-gray-600">Last Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button
            onClick={onClearHistory}
            variant="outline"
            size="sm"
            className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 w-full sm:w-auto"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear History
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-3 sm:p-6">
        {filteredHistory.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              {timeFilter === 'all' 
                ? 'No test history available. Run your first speed test!' 
                : `No tests found for ${getFilterLabel(timeFilter).toLowerCase()}.`
              }
            </p>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {filteredHistory.map((test) => (
              <div 
                key={test.id}
                className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-200 transform hover:scale-[1.01]"
              >
                <div className="flex flex-col space-y-3">
                  {/* Header with date and connection info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                    <div className="flex flex-col space-y-1">
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(test.timestamp)}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        {test.connectionType} • {test.provider}
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">Download</div>
                        <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                          {formatSpeed(test.downloadSpeed)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Upload className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">Upload</div>
                        <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                          {formatSpeed(test.uploadSpeed)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Timer className="h-4 w-4 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">Ping</div>
                        <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                          {formatLatency(test.ping)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">Jitter</div>
                        <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                          {formatLatency(test.jitter)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
