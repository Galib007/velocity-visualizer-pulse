
import { ConnectionInfo } from '@/types/speedTest';

export const getConnectionInfo = (): ConnectionInfo => {
  // Simulate connection detection
  const connectionTypes = ['WiFi', '4G', '5G', 'Fiber', 'Cable', 'DSL'];
  const providers = ['Verizon', 'AT&T', 'Comcast', 'Spectrum', 'T-Mobile', 'Local ISP'];
  
  return {
    connectionType: connectionTypes[Math.floor(Math.random() * connectionTypes.length)],
    provider: providers[Math.floor(Math.random() * providers.length)]
  };
};
