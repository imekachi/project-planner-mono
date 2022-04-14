module.exports = {
  plugins: ['@typescript-eslint', 'unused-imports', 'import'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-param-reassign': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // Sort imports
    'import/order': [
      'warn',
      {
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'never',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'import/newline-after-import': 'warn',
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
  },
  overrides: [
    {
      files: ['./*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
