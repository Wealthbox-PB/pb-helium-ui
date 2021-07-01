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
