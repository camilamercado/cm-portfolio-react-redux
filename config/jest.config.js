module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/*/*/Loadable.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 40,
      branches: 40,
      functions: 30,
      lines: 40,
    },
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  moduleDirectories: ['node_modules', 'app'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>/config/jest-mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest-mocks/image.js',
  },
  setupFilesAfterEnv: ['<rootDir>/config/test-setup.js'],
  testRegex: 'tests/.*\\.test\\.js$',
};
