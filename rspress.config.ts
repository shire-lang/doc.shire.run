import * as path from 'path';
import {defineConfig} from 'rspress/config';
import {pluginShiki} from "@rspress/plugin-shiki";
import shireLang from './shire.tmLanguage.json' assert {type: 'json'}


// shire lang json path
const shirePath = path.join(path.resolve(), 'shire.tmLanguage.json');

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
    }
  },
  plugins: [pluginShiki({
    theme: 'css-variables',
    langs: [
      "kotlin", "codeql", "rust",
      // @ts-ignore
      {
        id: 'shire',
        // @ts-ignore
        scopeName: 'source.shire',
        aliases: ['shire'],
        path: shirePath,
        ...shireLang
      },
    ],
  })],
});
