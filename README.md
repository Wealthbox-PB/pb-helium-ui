# helium-ui

This repo contains front-end code (HTML, CSS, and Javascript) for the Helium Design System and Component Library.

For the back-end code:
- [helium-rails](https://github.com/starburstlabs/helium)

For the documentation:
- [Documentation site](https://helium.wealthbox.com)
- [helium-docs](https://github.com/starburstlabs/helium-docs)

### Legal

Copyright (c) Starburst Labs, Inc. 50 Park Row West, Suite 907, Providence, RI, 02903

You are browsing this source code because of your contractual relationship with Starburst Labs, Inc. Your use and modification of the code is governed by this contract. There is no license to copy or distribute this source code in any way.

### Installing Dependencies

- Install yarn packages `yarn install`

### Icon Font Compilation Tooling

This project uses [FontCustom](https://github.com/FontCustom/fontcustom) to compile SVG icon assets into a custom font coupled with a generated stylesheet with icon classes.

#### Installing FontCustom

```
brew tap bramstein/webfonttools
brew update
brew install woff2 sfnt2woff fontforge eot-utils
gem install fontcustom
```

#### Compiling Helium Icons

1. Add or modify an svg icon asset in the `assets/icons` folder
2. Run `fontcustom compile` command in the terminal (from the project root directory)
3. You should now see the old font files have been removed, a set of new font files has been added, and a re-generated `_iconography.scss` stylesheet
