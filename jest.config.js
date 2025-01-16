// This is based off of the config from the crm-web project,
// any updates or enhancements made to that file should be
// reviewed and considered here as well.

module.exports = {
  moduleFileExtensions: [`js`, `json`, `jsx`, `ts`, `tsx`],
  moduleDirectories: [`node_modules`],
  roots: [`<rootDir>/spec`],
  snapshotSerializers: [`enzyme-to-json/serializer`],
  testEnvironment: `jsdom`,
  testMatch: [`**/?(*.|*_)+(spec|test).+(ts|tsx)`],
  transform: {
    '^.+\\.(js|ts|tsx|jsx)?$': `babel-jest`,
  },
  modulePathIgnorePatterns: [`node_modules`, `jest-test-results.json`],
};
