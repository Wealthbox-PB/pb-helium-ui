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
          `extend`,
          `for`,
          `if`,
          `include`,
          `mixin`,
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
