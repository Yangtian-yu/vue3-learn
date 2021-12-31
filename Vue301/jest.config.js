module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  modueFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx'],
  testMatct: ['**/test/**/*.spec.js', '**/__tests__**/*.spec.js'],
  moduleNameMapper: {
    '^main(.*)$': '<rootDir>/src$1',
  },
}
