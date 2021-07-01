// This is based off of the config from the crm-web project,
// any updates or enhancements made to that file should be
// reviewed and considered here as well.

module.exports = {
  moduleFileExtensions: [`js`, `json`, `jsx`, `ts`, `tsx`],
  moduleDirectories: [`node_modules`],
  roots: [`<rootDir>/ts/spec`],
  setupFiles: [`<rootDir>/ts/spec/jest_config_setup.js`],
  snapshotSerializers: [`enzyme-to-json/serializer`],
  testMatch: [`**/*.+(ts|tsx)`, `**/?(*.)+(spec|test).+(ts|tsx)`],
  transform: {
    '^.+\\.(js|ts|tsx|jsx)?$': `babel-jest`,
  },
};
