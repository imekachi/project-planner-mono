const baseConfig = require('./eslint-preset')

module.exports = {
  ...baseConfig,
  extends: [...baseConfig.extends, 'plugin:react-hooks/recommended'],
  rules: {
    ...baseConfig.rules,
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
}
