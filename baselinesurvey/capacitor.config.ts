import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.baselinesurvey',
  appName: 'baselinesurvey',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    cleartext: true,
    hostname: '192.168.1.111',
    iosScheme: 'http',
    androidScheme: 'http'
  }
};

export default config;