# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.28] - 2021-01-25
- Added table component dense spacing styles as default for printing
- Added modifier to be used in the future for dense spacing styles

### Changed
- Updated table component font-size from `$h-font-size-sm` to `$h-font-size-md` for screens

## [1.0.27] - 2021-01-22
### Added
- Added `comment--filled` svg icon asset
- Added `comment--filled--lg` svg icon asset

### Changed
- Updated `comment` svg icon asset
- Updated `comment--lg` svg icon asset
- Recompiled icon font

## [1.0.26] - 2020-11-16
### Added
- Added `$h-header-footer-background-color` variable for consistent background-color on table and card component headers

### Changed
- Updated `$h-card-header-footer-background-color` and `$h-table-header-background-color` to use `$h-header-footer-background-color`

## [1.0.25] - 2020-11-10
### Added
- Added print stylesheet with necessary imports for crm-web
- Added print variables stylesheet
- Added screen and print media queries for `.h-table` component
- Added modifier classes for customization of `.h-table` component

### Changed
- Updated `.h-table` component to use the same `box-shadow` as the `.h-card` component instead of an outer border
- Updated focus styles for form elements in an error state

## [1.0.24] - 2020-08-06
### Changed
- Updated `.h-card--border-radius-none` and `.h-card--border-radius-mobile-none` rulesets to use
child selectors (`>`) to avoid unforeseen impact in nested cards

## [1.0.23] - 2020-07-30
### Changed
- Removed transparent border on `h-card` component as it caused some unintended side effects

## [1.0.22] - 2020-07-17
### Added
- Added transparent border to `h-card` component to fix some bugs with using border-box
- Added `$h-color-text-darker` and `.h-color-text-darker` utilities for `$h-gray-900`

## [1.0.21] - 2020-07-07
### Added
- Added `browserslist` key for supported autoprefixer browsers in package.json

### Changed
- Autoprefixed files as necessary for our supported browsers

## [1.0.20] - 2020-07-01
### Added
- Added styling for `h-table` component

### Changed
- Alphabetized component variable definitions

## [1.0.19] - 2020-06-15
### Added
- Added `$h-border-radius--lg` variable
- Added `$h-card-header-footer-y-padding` variable

### Changed
- Updated modal and card to use `$h-border-radius--lg` variable
- Updated card header and footer to use `$h-card-header-footer-y-padding` variable

## [1.0.18] - 2020-06-10
### Added
- Added raw color variables to be used for color and background-color
- Added semantic color variables to be used for color and background-color
- Added an alias for `$h-color-text` (`$h-color-text-normal`)

### Changed
- Updated variable structure to use scss maps
- Separated colors into raw/semantic maps based on application use case

## [1.0.17] - 2020-06-03
### Added
- Added small modal dialog modifier class `.h-modal__dialog--sm`
- Added small modal dialog size variable `$h-modal-width--desktop-sm`

## [1.0.16] - 2020-06-03
### Added
- Added `b-cloud` svg icon asset
- Added `b-outlook-csv` svg icon asset
- Added `b-paw` svg icon asset
- Added `check-mark` svg icon asset
- Added `information` svg icon asset
- Added `information--filled` svg icon asset
- Added `information--filled--lg` svg icon asset
- Added `information--lg` svg icon asset
- Added `play` svg icon asset
- Added `settings--filled` svg icon asset
- Added `settings--filled--lg` svg icon asset

### Changed
- Updated `.gitignore` to include `*.DS_Store`
- Updated `$icons_preprocessor_path` variable to include `!default` flag
- Updated `settings--lg` svg icon asset
- Updated `settings` svg icon asset
- Recompiled icon font
- Updated `stylelint:staged:check` yarn task to allow empty input for ignored files

## [1.0.15] - 2020-05-27
### Added
- Added shadow variables
- Added shadow utility classes
- Added styling for `h-card` component

## [1.0.14] - 2020-05-22
### Added
- Added `.stylelintignore` file
- Added `scss/bootstrap_overrides/_reboot.scss` to be ignored by stylelint

### Changed
- Added missing "Added" heading to CHANGELOG entry for 1.0.12

## [1.0.13] - 2020-05-20
### Changed
- Updated `bootstrap` to latest (v4.5.0)
- Updated `$custom-select-indicator`/`$custom-select-indicator-color` to use the new `escape-svg` mixin
- Updated our `reboot.scss` to use bootstrap's from v4.5.0

## [1.0.12] - 2020-05-19
### Added
- Added [stylelint](https://github.com/stylelint/stylelint) package to `devDependencies`
- Added [stylelint-order](https://github.com/hudochenkov/stylelint-order) package to `devDependencies`
- Added [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) package to `devDependencies`
- Added [stylelint-config-idiomatic-order](https://github.com/ream88/stylelint-config-idiomatic-order) package to `devDependencies`
- Added `stylelint:check` and `stylelint:fix` npm scripts to package.json to allow for linting of `scss`/`css` files
- Added [pre-commit](https://github.com/pre-commit/pre-commit) package to `devDependencies`
- Added [lint-staged](https://github.com/okonet/lint-staged) package to `devDependencies`
- Added a pre-commit hook to disallow commits with `scss`/`css` files that have linting errors
- Added `stylelint:staged:check` and `lint:staged` npm scripts to support pre-commit hook

### Changed
- Updated all `scss` files to follow stylelint config rules

## [1.0.11] - 2020-04-22
### Added
- Added `google` and `google-sign` svg icon asset
- Added `filter--filled` svg icon asset
- Added `filter--filled--lg` svg icon asset

### Changed
- Updated `clock` svg icon asset
- Updated `clock--lg` svg icon asset
- Updated `event` svg icon asset
- Updated `event--lg` svg icon asset
- Updated `event-add` svg icon asset
- Updated `event-add--lg` svg icon asset
- Updated `history` svg icon asset
- Updated `history--lg` svg icon asset
- Recompiled icon font

## [1.0.10] - 2020-04-10
### Added
- Added `history--lg` svg icon asset
- Added `history` svg icon asset
- Added `household--filled--lg` svg icon asset
- Added `household--filled` svg icon asset
- Added `organization--filled--lg` svg icon asset
- Added `organization--filled` svg icon asset
- Added `trust--filled--lg` svg icon asset
- Added `trust--filled` svg icon asset

### Changed
- Recompiled icon font

## [1.0.9] - 2020-03-02
### Added
- Added `$h-modal-min-height--lg` and `$h-modal-width--desktop-lg` variables for large modals
- Added `.h-modal__dialog--lg` modifier for large modals
- Added `.h-modal__body--spacing-bottom` helper class for modals without a footer

## [1.0.8] - 2020-02-24
### Added
- Added styling to make helium modal `.h-modal__body` content stretch to fill available space between header and footer
- Added `h-fade-out` animation for fading out content

## [1.0.7] - 2020-02-20
### Changed
- Updated helium modal close button styles to accommodate helium close icon
- Updated package version to match Github Release version

## [1.0.6] - 2020-02-18
### Added
- Added styling for inline icons inside buttons via `::before` pseudo element styling

## [1.0.5] - 2020-02-14
### Added
- Added `border: 0` and `outline: none` to modal close button
- Added `font-style: normal` to helium buttons

## [1.0.4] - 2020-02-13
### Added
- Added custom icon font assets and config
- Added autogenerated icon font files
- Added autogenerated `.h-icon-{{glyph}}` component styles

### Changed
- Updated package version to match Github Release version

## [1.0.3] - 2020-02-11
### Added
- Added CHANGELOG.MD and included previous releases
- Created `.h-modal` component styles and variables

## [1.0.2] - 2020-01-13
### Added
- Added styles to make `.h-btn--link` calls to action have text underline on focus

## [1.0.1] - 2019-11-25
### Added
- Created `h-fade-in-down` animation and variable
- Created `.h-min-width-0` box model utility class

## [1.0.0] - 2019-10-11
### Added
- Created front-end focused repository from existing scss files that were stored in former "helium" ruby on rails repository:
  - Animations
  - Colors
  - Components
    - Input
    - Input Group
    - Select
    - Textarea
    - Checkbox
    - Radio Button
  - Mixins
  - Typography
  - Utilities
  - Variables
- Created primary fill and outline buttons
- Created secondary fill and outline buttons
- Created positive fill and outline buttons
- Created negative fill and outline buttons
- Created information fill and outline buttons
- Created button mixins and variables
