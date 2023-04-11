# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.24] - 2023-04-11

### Added

- Added `Tooltip` component
- Added new `table` svg icon asset
- Added new `table-chart` svg icon asset
- Added new `bar-chart` svg icon asset
- Added `svgo` package for svg asset compression
- Added support for Yarn 3

### Changed

- Updated `package.lock` with a `resolution` for `@types/react`
- Updated `yarn.lock` file with several dependency updates
- Recompiled icon font

## [2.0.23] - 2023-02-23

### Added

- Added `h-min-height-0` utility class from `crm-web` bridge file
- Added `h-pointer-events-all` utility class from `crm-web` bridge file
- Added `$h-color-border-shared-component-dark` variable from `crm-web` bridge file
- Added `:disabled` and `[disabled]` rules for styling `<Switch />` component

### Removed

- Removed `h-switch--disabled` class in favor of disabled selectors

## [2.0.22] - 2023-02-17

### Changed

- Update `reset.scss` default font-weight to use 400 rather than the helium-ui variable to allow it to be imported first

## [2.0.21] - 2023-02-17

### Added

- Added a `reset.scss` file

## [2.0.20] - 2023-02-14

### Added

- Added disabled prop to `Switch` React component
- Added supporting CSS styles
- Added `h-shared-component-disabled` mixin and associated variables
- Added new `shared` mixins file

### Changed

- Changed internal state of `Switch` component to use `on` instead of `enabled`
- Changed `Switch` component CSS classes to use `on` instead of `enabled`
- Updated `button` and `Switch` component styles to use `h-shared-component-disabled` mixin when disabled

### Removed

- Removed unused `h-form-element-focus-disabled` mixin from `v2.0.19`

## [2.0.19] - 2023-02-10

### Added

- Added a `Switch` React component
- Added supporting CSS styles
- Added new semantic variables for `positive`, `negative`, and `primary` colors
- Added deprecation comments for `success` and `error` semantic variables in favor of `positive` and `negative`
- Added new variables and mixins for `positive`, `negative`, and `disabled` form element focus states

### Changed

- Updated some semantic color variable references for `success` and `error` to use `positive` and `negative`

## [2.0.18] - 2023-01-26

### Added

- Added a new available size `xl` to the Dialog component
- Added supporting CSS styles

### Changed

- Updated the TS config to ignore changes in `/dist` folder

## [2.0.17] - 2023-01-24

### Changed

- Updated SCSS calculations to use the `calc` function

## [2.0.16] - 2023-01-03

### Changed

- Updated `AlertDialog` and `SimpleAlertDialog` components to be closable by escape key

## [2.0.15] - 2022-12-07

### Added

- Added new `examplekey-backspace` svg icon asset
- Added new `examplekey-backspace--lg` svg icon asset
- Added new `examplekey-return` svg icon asset
- Added new `examplekey-return--lg` svg icon asset

### Changed

- Recompiled icon font

## [2.0.14] - 2022-10-14

### Added

- Added new `share` svg icon asset
- Added new `share--lg` svg icon asset

### Changed

- Recompiled icon font

## [2.0.13] - 2022-09-12

### Added

- Added `/coverage` directory to `.gitignore` file
- Added spec for `DialogBody` component
- Added spec for `DialogFooter` component

### Changed

- Updated `bootstrap` to version `5.1.3`
- Changed `bootstrap` package.json entry to include `~` instead of `^` to upgrade only to latest 5.1 patch releases
- Fixed eslint errors in js files
- Updated `Spinner` component specs to use `jest` instead of `enzyme`
- Updated `DialogFooter` component:
  - Updated component wrapping element from a `div` to `footer` for better semantics and testability
  - Added ternary to only render `children` container when `children` exist

### Removed

- Removed duplicate keyframe animations from animation scss file
- Removed packages and references to `enzyme-adapter-react-16`

## [2.0.12] - 2022-08-12

### Added

- Added basic animation helper classes based off classes from crm-web: `h-animate-fade-in` and `h-animate-fade-out`
- Added `Interstitial` component based off of crm-web `NoResults` component
- Added `jest-dom` package for testing components

## [2.0.11] - 2022-07-19

### Added

- Added Bootstrap white-space utility classes for use in consuming applications

## [2.0.10] - 2022-06-15

### Changed

- Added a `h-icon-content()` function to the "\_iconography.scss" FontCustom file template that wraps a string in quotes and prefixes a backslash.
- Replaced the native `glyphs` FontCustom method with implicitly iterating through each glyph so we can wrap the icons unicode in the `h-icon-content()` function to fix known `dart-sass` issue.
- Recompiled icon font as well as generated corrected "\_iconography.scss" stylesheet.

## [2.0.9] - 2022-06-01

### Added

- Added an effect to the `useDialog` hook to call `closeDialog` when a `modal:close` event is dispatched

## [2.0.8] - 2022-03-22

### Added

- Added `false` type option to `initialFocusEl` and `returnFocusEl` props in modal dialogs to match allowed types from focus-trap library

## [2.0.7] - 2022-03-17

### Added

- Added `postcss` version 8

### Changed

- Base stylelint config off crm-web and add necessary updates
- Restrict classnames and ids to only use `h-[a-z]` prefix
- Upgrade to stylelint version 14
- Remove `stylelint-config-standard` and replace `stylelint-config-standard-scss`

## [2.0.6] - 2022-02-23

### Added

- Added `link-primary` to `ButtonVariant` type
- Added `link-secondary` to `ButtonVariant` type
- Added `active` prop to `Button` interface
- Added `disabled` prop to `Button` interface
- Added `focus` prop to `Button` interface
- Added `square` prop to `Button` interface
- Added `Button` type exports
- Added `LinkButton` component to helium-ui
- Added new `filter` svg icon asset
- Added new `filter--lg` svg icon asset
- Added `filter-circle` svg icon asset
- Added `filter-circle--lg` svg icon asset
- Added `filter-circle--filled` svg icon asset
- Added `filter-circle--filled--lg` svg icon asset
- Added check for `backdrop` prop on `AlertDialog` to determine whether or not to render the `DialogBackdrop` component
- Added `user-select: none` rule to dialog backdrop element to disallow content selection when the dialog is open
- Added disabled styles to helium button link modifiers
- Added `getDialogRootProps` method for the dialog wrapper props in `useDialog` hook

### Changed

- Prefer auto cursor (arrow) on `DialogBackdrop` component to match the ux of similar libraries
- Use `jsdom` as `testEnvironment` in jest config
- Use same `testMatch` value as crm-web in jest config
- Updated `clock` svg icon asset to fix artboard size
- Updated `clock--lg` svg icon asset to fix artboard size
- Renamed `filter` icon to `filter-alt`
- Renamed `filter--lg` icon to `filter-alt--lg`
- Renamed `filter--filled` icon to `filter-alt--filled`
- Renamed `filter--filled--lg` icon to `filter-alt--filled--lg`
- Refactored `Dialog` component DOM structure
- Updated `Dialog` component styling to fix outstanding layout bugs and reflect DOM structure changes
- Renamed `getRootProps` to `getDialogContainerProps` in `useDialog` hook since it is no longer the root element
- Updated any references that were using "root" to now use "container" for consistency in `useDialog` hook

### Removed

- Remove focus state styling from actual dialog element

## [2.0.5] - 2022-01-26

### Added

- Added `ModalDialog` react component
- Added `AlertDialog` react component
- Added `SimpleModalDialog` react component
- Added `SimpleAlertDialog` react component
- Added `Button` react component
- Added `useDialog` hook
- Added `Portal` react component
- Added `useCloseWithEscapeKey` hook
- Added `useScrollLock` hook
- Added `.h-overflow-visible`, `.h-overflow-x-visible`, and `.h-overflow-y-visible` utility classes
- Added `.h-user-select-none` utility class
- Added `watch`, `prettier`, and `eslint` scripts in package.json
- Added `eslint-plugin-testing-library`
- Added `eslint-plugin-jest-dom`

## [2.0.4] - 2022-01-06

### Added

- Added `exclamation-circle--lg` svg icon asset
- Added `exclamation-circle--sm` svg icon asset
- Added `exclamation-circle` svg icon asset
- Added `exclamation-triangle--lg` svg icon asset
- Added `exclamation-triangle--sm` svg icon asset
- Added `exclamation-triangle` svg icon asset
- Added `fullscreen--lg` svg icon asset
- Added `fullscreen` svg icon asset
- Added `info-circle--lg` svg icon asset
- Added `info-circle` svg icon asset
- Added `question-mark-circle--lg` svg icon asset
- Added `question-mark-circle--sm` svg icon asset
- Added `question-mark-circle` svg icon asset

### Changed

- Update `question-mark--lg` svg icon asset
- Update `settings-group--lg` svg icon asset
- Recompiled icon font

## [2.0.3] - 2021-11-23

### Added

- Added `.h-icon-sparkles` for suggest functionality, recompiled icon font.
- Added `h-form-element-focus-error` mixin to add styles to focused form elements with errors.
- Added error styling to `.h-input-group` component.
- Added `h-btn-disabled` mixin to share disabled styles across components.
- Added `.h-pointer-events-none` utility class.
- Added `.h-cursor-auto` utility class.
- Added `.h-table--list` modifier class.

### Changed

- Updated all component disabled selectors to include pseudoclass, class, and attribute for posterity and consistency.
- Move`.h-table` component padding rulesets above modifiers.

## [2.0.2] - 2021-09-28

### Added

- Added `.h-table--print-layout-fixed` modifier for more consistent printing of data dense tables.
- Added custom text-align print only utilities via bootstrap utilities api.

### Changed

- Updated `--bs-font-sans-serif` and `--bs-font-monospace` bootstrap variables to use helium-ui variables by default.
- Updated `.h-table__row--mobile-first-visible-row` and `.h-table__row--mobile-last-visible-row` rulesets to work with and without parent `.h-table--untable` modifier class.
- Updated existing text-align print utilities to now be responsive.

## [2.0.1] - 2021-08-27

### Changed

- Selectively imported bootstrap 5 utilities for use instead of bringing in every utility
  - Imported utilities for screen and print in separate bootstrap override utility files, and imported
    bootstrap utility files inside these files
- Imported bootstrap's reboot in a separate bootstrap override file which includes helium-ui specific
  overrides for anchor tags without `href` or `class` attributes.
- Updated `.h-table--untable` modifier class to account for padding on headings inside the tbody element
- Updated `.h-table--untable` modifier class to account for only-child use case

### Added

- Added `.h-table--overflow-x` modifier to allow horizontal overflow on certain tables
- Added `$h-color-active` and `$h-color-background-active` semantic color variables for active state
- Added `.h-color-background-active-hover` utility class for active state background when hovering
- Added `.h-text-decoration-none` utility
- Added `.h-text-decoration-underline` utility

### Removed

- Removed `$h-color-background-active-shared-component` and updated instances to use `$h-color-background-active`

## [2.0.0] - 2021-07-23

- This is a major release version, which introduces breaking changes from v1.x. Please view the changelog,
  the full [PR](https://github.com/starburstlabs/helium-ui/pull/33/commits), and the
  [Bootstrap 5 Migration Guide](https://getbootstrap.com/docs/5.0/migration/) for more information.

### Changed

- Updated to bootstrap version 5 from bootstrap version 4
- Updated helium-ui variable names to follow $h-property-modifier style for consistent naming
- Updated helium shared components to use shared component variables
- Removed any instance of -- in variable names as we do not use BEM in variable names
- Removed bootstrap root.scss file that was not in use
- Renamed `$h-color-text` to `$h-color-text-normal`

### Added

- Added initial js dependencies/configs to prep for react/ts components and testing/linting
- Added custom React `HeliumSpinner` Component from crm-web
- Added simple build for distributing components
- Added `.h-img-fluid` and `.h-background-none` helper classes

## [1.0.43] - 2021-06-11

### Added

- Added padding to table rows using `.h-table--untable` modifier

### Changed

- Updated `.h-btn--square` padding to 0 for proper vertical centering in Safari browser

## [1.0.42] - 2021-05-28

### Added

- Added `.h-btn--border-hover`, `.h-btn--enabled`, `.h-btn--full-width-mobile`, and `.h-btn--focus` button modifiers and mixins
- Added `word-break: break-word;` for improved wrapping to `.h-table` component
- Added `.h-table__heading--mobile-first-visible-column`, `.h-table__heading--mobile-last-visible-column`,
  `.h-table__data--mobile-first-visible-column`, `.h-table__data--mobile-last-visible-column`, `.h-table__data--desktop-first-visible-column`,
  `.h-table__data--desktop-last-visible-column`, `.h-table__row--mobile-first-visible-row`, `.h-table__row--mobile-last-visible-row`,
  `.h-table__heading--print-first-visible-column`, `.h-table__heading--print-last-visible-column`,
  `.h-table__data--print-first-visible-column`, `.h-table__data--print-last-visible-column`, `.h-table__row--print-first-visible-row`,
  and `.h-table__row--print-last-visible-row` mobile and print modifiers to `.h-table` component

## [1.0.41] - 2021-05-26

### Changed

- Updated `.h-btn--info` background and text colors
- Updated `.h-btn--info-outline` border color

## [1.0.40] - 2021-03-18

### Changed

- Updated `.h-btn--square` mixins to accept font-size values
- Updated `.h-btn--square` font-sizes to be larger on smaller buttons

## [1.0.39] - 2021-04-29

### Added

- Added `.h-table--untable` modifier class to stack table data on mobile devices
- Added extra selector support for `.h-table--border-radius-none` and `.h-table--border-radius-mobile-none`

## [1.0.38] - 2021-04-28

### Added

- Added `.h-btn--square` modifier class, mixins, and variables

## [1.0.37] - 2021-03-16

### Changed

- Updated `.h-table` component selector specificity to account for overflow visible changes
- Updated `.h-table` component headings/rows to account for component `border-radius`

## [1.0.36] - 2021-03-11

### Changed

- Updated `purple-25` color variable

## [1.0.35] - 2021-03-09

### Added

- Added `red-50` color variable

## [1.0.34] - 2021-03-09

### Added

- Added `purple-25` color variable
- Added `green-25` color variable
- Added `yellow-25` color variable
- Added `orange-25` color variable
- Added `red-25` color variable

### Removed

- Removed `red-50` color variable

## [1.0.33] - 2021-03-08

### Added

- Added `pin--lg` svg icon asset
- Added `pin--sm` svg icon asset
- Added `pin` svg icon asset
- Added `purple-25` color to color palette
- Added `green-25` color to color palette
- Added `yellow-25` color to color palette
- Added `orange-25` color to color palette
- Added `red-25` color to color palette

### Changed

- Recompiled icon font

## [1.0.32] - 2021-03-04

### Added

- Added `.h-table--fixed-header` modifier class
- Added `.h-table--layout-fixed-mobile` modifier class
- Added `.h-overflow-auto-sm-down` utility class

### Changed

- Updated `.h-table` component to have visible overflow by default
- Updated how `.h-table--border-radius` and `.h-table--border-radius-mobile-none` handle border-radius
- Move overflow and sticky header styles to `.h-table--fixed-header` modifier class

## [1.0.31] - 2021-03-01

### Added

- Added `delete-circle--sm` svg icon asset
- Added `exclamation--sm` svg icon asset
- Added `question-mark--sm` svg icon asset

### Changed

- Updated `delete-circle--lg` svg icon asset
- Updated `delete-circle` svg icon asset
- Updated `exclamation--lg` svg icon asset
- Updated `exclamation` svg icon asset
- Updated `question-mark--lg` svg icon asset
- Updated `question-mark` svg icon asset
- Recompiled icon font

## [1.0.30] - 2021-02-02

### Added

- Added `.h-table--outlined` modifier class
- Added `.h-table--align-middle-desktop` modifier class
- Added `.h-card--outlined` modifier class
- Added `$h-shared-component-background-color` variable
- Added `$h-shared-component-background-color-secondary` variable
- Added `$h-shared-component-border-color` variable
- Added `$h-shared-component-border-radius` variable

### Changed

- Deprecated `$h-header-footer-background-color` and updated to use `$h-shared-component-background-color-secondary` until removal
- Updated `$h-card-header-footer-background-color`, `$h-table-header-background-color` to use `$h-shared-component-background-color-secondary`
- Updated `$h-card-background-color`, `$h-color-form-element-background`, and `$h-table-background-color` to use `$h-shared-component-background-color`
- Updated `$h-card-border-color`, `$h-table-border-color` to use `$h-shared-component-border-color`
- Updated `$h-card-border-radius`, `$h-modal-border-radius`, `$h-table-border-radius` to use `$h-shared-component-border-radius`

## [1.0.29] - 2021-01-27

### Added

- Added `chevron-down--sm` svg icon asset
- Added `chevron-right--sm` svg icon asset
- Added `chevron-left--sm` svg icon asset
- Added `chevron-up--sm` svg icon asset

### Changed

- Updated `chevron-down` svg icon asset
- Updated `chevron-right` svg icon asset
- Updated `chevron-left` svg icon asset
- Updated `chevron-up` svg icon asset
- Recompiled icon font

## [1.0.28] - 2021-01-25

### Added

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
