const jestBaseConfig = require('./jest-base.config')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['jest-config/jest-ui.setup.ts'],
  ...jestBaseConfig,
}
