import * as path from 'path';
import {defineConfig} from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Shire',
  description: 'AI Coding Agent Language',
  icon: '/plugin-icon.svg',
  logo: {
    light: '/plugin-icon.svg',
    dark: '/plugin-icon.svg',
  },
  logoText: 'Shire',
  themeConfig: {
    socialLinks: [
      {icon: 'github', mode: 'link', content: 'https://github.com/phodal/shire'},
    ],
    footer: {
      message: 'Shire is an AI Coding Agent Language',
    },
  }
});
