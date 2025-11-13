import { withCallstackPreset } from '@callstack/rspress-preset';

export default withCallstackPreset(
  {
    context: __dirname,
    docs: {
      title: 'React Native Bottom Tabs',
      description: 'React Native Bottom Tabs Documentation',
      editUrl:
        'https://github.com/grininc/react-native-bottom-tabs/tree/main/docs',
      icon: '/img/phone.png',
      logoLight: '/img/phone.png',
      logoDark: '/img/phone.png',
      rootDir: 'docs',
      rootUrl: 'https://grininc.github.io/react-native-bottom-tabs/',
      socials: {
        github: 'https://github.com/grininc/react-native-bottom-tabs',
      },
    },
  },
  {
    base: '/react-native-bottom-tabs/',
  }
);
