import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'edu.mtec.njpedigo.myNewIonicApp',
  appName: 'myNewApp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    url: 'http://localhost:8100'
  }
};

export default config;
