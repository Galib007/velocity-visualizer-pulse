
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, Globe, MapPin } from 'lucide-react';

export const ConnectionInfo = () => {
  const [connectionInfo, setConnectionInfo] = useState({
    type: 'Unknown',
    provider: 'Detecting...',
    ip: 'Loading...',
    location: 'Detecting location...'
  });

  useEffect(() => {
    // Simulate connection detection
    const detectConnection = async () => {
      // Simulate network detection delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const connectionTypes = ['WiFi', '4G', '5G', 'Ethernet', 'Fiber'];
      const providers = ['Verizon', 'AT&T', 'Comcast', 'Spectrum', 'T-Mobile'];
      
      // Simulate getting user's IP (in a real app, you'd use an API)
      const simulatedIP = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
      
      setConnectionInfo({
        type: connectionTypes[Math.floor(Math.random() * connectionTypes.length)],
        provider: providers[Math.floor(Math.random() * providers.length)],
        ip: simulatedIP,
        location: 'New York, NY, US'
      });
    };

    detectConnection();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop: 3-column bento grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-4">
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Wifi className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Connection</div>
                <div className="font-semibold text-gray-900 dark:text-white">{connectionInfo.type}</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Provider</div>
                <div className="font-semibold text-gray-900 dark:text-white">{connectionInfo.provider}</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-5 w-5 text-red-600 dark:text-red-400" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                <div className="font-semibold text-gray-900 dark:text-white">{connectionInfo.location}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile: Single horizontal card */}
      <Card className="md:hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between space-x-4 text-sm">
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <Wifi className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-500 dark:text-gray-400">Connection</div>
                <div className="font-medium text-gray-900 dark:text-white truncate">{connectionInfo.type}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <Globe className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-500 dark:text-gray-400">Provider</div>
                <div className="font-medium text-gray-900 dark:text-white truncate">{connectionInfo.provider}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <MapPin className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs text-gray-500 dark:text-gray-400">Location</div>
                <div className="font-medium text-gray-900 dark:text-white truncate">{connectionInfo.location}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
