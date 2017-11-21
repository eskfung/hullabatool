module.exports = {
  "modulePaths": [
    "<rootDir>/src",
  ],
  "moduleNameMapper": {
    "\\.(css|scss|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  "setupFiles": [
    "raf/polyfill",
    "<rootDir>/__tests__/support/enzyme-setup.js",
  ],
  "testRegex": "__tests__/.*-test\\.jsx?$",
};
