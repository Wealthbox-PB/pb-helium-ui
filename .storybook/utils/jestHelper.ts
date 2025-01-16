import { withTests } from '@storybook/addon-jest';
import heliumTestResults from '../../jest-test-results.json';

export const getHeliumTestResults = () => {
  return withTests({ results: heliumTestResults });
};
