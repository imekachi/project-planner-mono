const baseConfig = require('./eslint-preset')

module.exports = {
  ...baseConfig,
  extends: [...baseConfig.extends, 'plugin:react-hooks/recommended'],
}
