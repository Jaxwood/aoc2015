import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
];
