import js from '@eslint/js';
import globals from 'globals';
import airbnbBase from 'eslint-config-airbnb-base';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        es6: true,
      },
    },
    rules: {
      ...airbnbBase.rules,
      'no-unused-vars': 'warn',
      'linebreak-style': 'off',
      // "no-console": "error", // no-consoleルールを追加
      // quotes: ["error", "single"], // シングルクォートを強制
      // indent: ["error", 2], // インデントを2スペースに設定
    },
  },
];
