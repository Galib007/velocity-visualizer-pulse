
export type MetricType = 'ping' | 'jitter' | 'download' | 'upload';

export interface Metrics {
  downloadSpeed: number;
  uploadSpeed: number;
  ping: number;
  jitter: number;
}

export interface ConnectionInfo {
  connectionType: string;
  provider: string;
}
