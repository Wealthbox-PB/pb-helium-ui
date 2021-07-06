// This is based off of the config from the crm-web project,
// any updates or enhancements made to that file should be
// reviewed and considered here as well.

module.exports = {
  moduleFileExtensions: [`js`, `json`, `jsx`, `ts`, `tsx`],
  moduleDirectories: [`node_modules`],
  roots: [`<rootDir>/ts/components`],
  setupFiles: [`<rootDir>/ts/jest_config_setup.js`],
  snapshotSerializers: [`enzyme-to-json/serializer`],
  testMatch: [`**/?(*.)+(spec|test).+(ts|tsx)`],
  transform: {
    '^.+\\.(js|ts|tsx|jsx)?$': `babel-jest`,
  },
};
