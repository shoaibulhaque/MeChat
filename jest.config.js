module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },

};
