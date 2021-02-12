module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/no-onchange': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 110,
        singleQuote: true
      }
    ],
    curly: 'error',
    quotes: [
      'error',
      'backtick',
      {
        avoidEscape: true
      }
    ],
    'max-depth': ['error', 4],
    'max-len': [
      'error',
      {
        code: 110,
        ignoreRegExpLiterals: true
      }
    ],
    'max-lines': ['error', 375],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 8],
    'max-statements': ['error', 45],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-var': 'error',
    'no-console': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    camelcase: ['error', { properties: 'never' }],
    'no-cond-assign': 2,
    'no-unused-vars': 0,
    'import/no-default-export': 2,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'global-require': 0,
    'no-alert': 0,
    'no-warning-comments': 2
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['*-spec.js', '*.tsx'],
      rules: {
        'max-lines': 'off',
        'max-lines-per-function': 'off'
      }
    }
  ]
};
