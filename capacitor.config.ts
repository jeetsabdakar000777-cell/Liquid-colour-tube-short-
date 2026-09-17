import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.liquidcolorsort.master',
  appName: 'Liquid Color Sort',
  webDir: 'dist',
  plugins: {
    AdMob: {
      appId: 'ca-app-pub-5327937366293342~8893862202',
    },
  },
};

export default config;
