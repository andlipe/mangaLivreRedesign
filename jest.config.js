// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components/$1',
    '^@shared(.*)$': '<rootDir>/src/shared/$1',
    '^@modules(.*)$': '<rootDir>/src/modules/$1',
    '^@assets(.*)$': '<rootDir>/src/assets/$1',
    '^@pages(.*)$': '<rootDir>/src/pages/$1',
    '^@services(.*)$': '<rootDir>/src/services/$1',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/src/mocks/fileMock.js`,
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
