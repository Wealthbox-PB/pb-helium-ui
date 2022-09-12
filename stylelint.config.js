// This is based off of the config from the crm-web project,
// any updates or enhancements made to that file should be
// reviewed and considered here as well.

'use strict';

module.exports = {
  extends: [`stylelint-config-standard-scss`, `stylelint-config-idiomatic-order`],
  plugins: [`stylelint-order`],
  rules: {
    'alpha-value-notation': null, // Opacity using percentages is not supported in Safari
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          `at-root`,
          `each`,
          `extend`,
          `for`,
          `if`,
          `else`,
          `function`,
          `return`,
          `include`,
          `mixin`,
        ],
      },
    ],
    'max-line-length': [
      120, // Default set in stylelint-config-standard package
      {
        ignore: [`comments`],
        // ignorePattern: [`/(https?://([-\\w\\.]+)+(:\\d+)?(/([\\w/_\\.]*(\\?\\S+)?)?)?)/`],
      },
    ],
    'color-function-notation': null, // Revisit this rule after upgrading to Dart Sass
    'no-descending-specificity': null,
    'no-empty-first-line': null,
    'no-invalid-position-at-import-rule': null, // Revisit this rule after upgrading to Dart Sass
    'scss/at-extend-no-missing-placeholder': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/no-global-function-names': null, // Revisit this rule after upgrading to Dart Sass
    'selector-class-pattern': `h-[a-z]+`, // helium-ui specific configuration
    'selector-id-pattern': `h-[a-z]+`, // helium-ui specific configuration
    'selector-type-no-unknown': null,
  },
};
