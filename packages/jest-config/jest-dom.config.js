const jestBaseConfig = require('./jest-base.config')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['jest-config/jest-dom.setup.ts'],
  ...jestBaseConfig,
}
