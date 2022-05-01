const baseConfig = require('config/eslint-preset')

module.exports = {
  ...baseConfig,
  extends: [...baseConfig.extends, 'next/core-web-vitals'],
}
