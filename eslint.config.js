import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // Áp dụng cho các file JS/TS/JSX/TSX
    ignores: ['node_modules', 'dist'], // Bỏ qua thư mục không cần lint
    languageOptions: {
      globals: globals.browser, // Biến toàn cục cho trình duyệt
      parser: tsParser, // Parser cho TypeScript
    },
    plugins: {
      '@typescript-eslint': tseslint, // Plugin cho TypeScript
      react, // Plugin cho React
      prettier: prettierPlugin, // Plugin cho Prettier
    },
    settings: {
      react: {
        version: 'detect', // Tự động phát hiện phiên bản React từ package.json
      },
    },
    rules: {
      ...js.configs.recommended.rules, // Quy tắc mặc định cho JavaScript
      ...tseslint.configs.recommended.rules, // Quy tắc mặc định cho TypeScript
      ...react.configs.recommended.rules, // Quy tắc mặc định cho React
      'prettier/prettier': 'error', // Báo lỗi nếu không tuân thủ Prettier
      'react/react-in-jsx-scope': 'off', // Không cần import React trong JSX (Vite không yêu cầu)
      '@typescript-eslint/no-unused-vars': 'warn', // Cảnh báo biến không sử dụng
      'no-unused-vars': 'warn', // Cảnh báo biến JS không sử dụng
      'no-undef': 'error', // Báo lỗi nếu biến không được định nghĩa
    },
  },
];
