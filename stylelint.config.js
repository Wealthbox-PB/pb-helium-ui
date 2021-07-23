// This is based off of the config from the crm-web project,
// any updates or enhancements made to that file should be
// reviewed and considered here as well.

"use strict";

module.exports = {
  extends: [`stylelint-config-standard`, `stylelint-config-idiomatic-order`],
  plugins: [`stylelint-order`],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          `at-root`,
          `each`,
          `else`,
          `extend`,
          `for`,
          `function`,
          `if`,
          `include`,
          `mixin`,
          `return`,
        ],
      },
    ],
    "block-opening-brace-newline-after": [`always`],
    "block-closing-brace-newline-before": [`always`],
    "no-descending-specificity": null,
    "selector-type-no-unknown": null,
    "string-quotes": `double`,
  },
};
