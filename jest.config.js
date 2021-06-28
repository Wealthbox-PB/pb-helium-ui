module.exports = {
  moduleFileExtensions: [`js`, `json`, `jsx`, `ts`, `tsx`],
  moduleDirectories: [`node_modules`, `<rootDir>/js`],
  roots: [`<rootDir>/js/spec`],
  setupFiles: [`<rootDir>/js/spec/jest_config_setup.js`],
  snapshotSerializers: [`enzyme-to-json/serializer`],
  testMatch: [`**/*.+(ts|tsx)`, `**/?(*.)+(spec|test).+(ts|tsx)`],
  transform: {
    '^.+\\.(js|ts|tsx|jsx)?$': `babel-jest`,
  },
};
