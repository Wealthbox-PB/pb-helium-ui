# Helium UI

## Overview

This repo contains front-end code (HTML, CSS, and Javascript) for the Helium Design System and Component Library.

For the back-end code:

- [helium-rails](https://github.com/starburstlabs/helium)

For the documentation:

- [Documentation site](https://helium.wealthbox.com)
- [helium-docs](https://github.com/starburstlabs/helium-docs)

## Legal

Copyright (c) Starburst Labs, Inc. 50 Park Row West, Suite 907, Providence, RI, 02903

You are browsing this source code because of your contractual relationship with Starburst Labs, Inc. Your use and modification of the code is governed by this contract. There is no license to copy or distribute this source code in any way.

## Installing Dependencies

- Install yarn packages `yarn install`

## Local Development with Storybook

You can run one of two "all in one" commands to start the storybook server and watch for changes in the tests.

- `yarn storybook:dev` will run the tests and generate a JSON file with the results. This will give you access to the storybook server at `localhost:1337`, and a traditional jest test runner in the terminal.
- `yarn storybook:dev:all` will run the tests and generate a JSON file with the results, and watch for changes in **all** the tests. This will give you access to the storybook server at `localhost:1337`, and a traditional jest test runner in the terminal.

> If you want to have tests displayed individually, open another terminal and run `yarn test:watch <regex>` or `yarn test:watchAll`.

- Create a new `<Component>.story.tsx` file in the `ts/components` directory.
- Import the component you want to build in the story.
- Use the UI to build the component and test it in real-time.

## Integrating with `crm-web` using Docker

This setup will get us a livereload `crm-web` environment that listens for changes in your local `helium-ui` repo as if it was a part of `crm-web`.

### Initial Setup (You only have to do this once)

- Add a `HELIUM_PATH` global variable to your preferred RC file (`.bashrc`, `.zshrc`, `.profile`, etc.)

  - e.g. `export HELIUM_PATH="$HOME/Sites/helium-ui"`
  - Confirm that the path is loaded in to the shell by running `echo $HELIUM_PATH` in your terminal.

- `cd $HELIUM_PATH` and (on your local machine, not in the wealthbox Docker shell) and run `yarn install`.

### Starting Development

- in the `$HELIUM_PATH` directory, run `bin/docker/ds_start.sh` to start the `helium-ui` file sync process.

  - The first time this runs, it will automatically create a docker volume for `helium-ui`. This allows us to `yarn link` the `helium-ui` package code for local development.

  - Make sure you have the `$HELIUM_PATH` variable defined — for help, see the "Initial Setup" section above.

### Automatic Setup

Open two terminal windows, one for the `helium-ui` repo and one for the `crm-web` repo. Make sure to not have any `crm-web` servers running while doing the following steps.

1. In the first terminal, run the following commands (Helium UI directory):

    ```bash
    # launch the file sync process for the `helium-ui` repo
    bin/docker/ds_start.sh

    # watch for changes in the `helium-ui` repo and rebuild the code
    yarn watch
    ```

2. In the second terminal, run the following commands (crm-web directory):

    ```bash
    # Runs the linking process for the `helium-ui` repo within the interactive Docker shell
    # Updates your tsconfig.json to point to the local `helium-ui` repo that you provided using the HELIUM_PATH environment variable
    bin/docker/helium_link.sh

    # After linking you may start up your local `crm-web` servers
    ```

3. In the second terminal, run the following commands when you are done developing with the local `helium-ui` package (crm-web directory):

    ```bash
    # Runs the unlinking process for the `helium-ui` repo within the interactive Docker shell
    # Resets your tsconfig.json
    bin/docker/helium_unlink.sh
    ```

##### Manual Setup

- `cd` into `[PATH_TO_CRM_WEB]` and run `bin/docker/ds_start.sh`.

- now run `bin/docker/interactive.sh`

  - When this runs, it will automatically create a volume for the `yarn` cache folder. This allows us to use `yarn link` inside of the Docker container.

- once in interactive, `cd node_modules/react` and `yarn link` to register the `react` package

  - If you encounter errors, try running `yarn install` to make sure your packages are up to date, and you have `react` installed properly.

- `cd ../react-dom` and `yarn link` to register the `react-dom` package

- `cd /helium-ui` and `yarn link react react-dom` to create symlinks using the registered packages and use the versions used in `crm-web`

  - This fixes an error when compiling about there being 2 versions of React. We prefer to use the version of React we're using in `crm-web`, so we need to register them here.

  - You'll technically only need to do this once, but it's important to do it in this stage of the process.

  - It's safe to leave this link once you've set it up. Occasionally, you might need to re-link these packages if you've cleared out your `yarn cache` or removed the cache volume from the Docker container.

- `yarn link` while still in `/helium-ui` to register the `helium-ui` package

- `cd /wealthbox` and `yarn link helium-ui` to create a symlink to Helium UI

- in a new terminal window, `cd $HELIUM_PATH` and (on your local machine, not in the wealthbox Docker shell) and run `yarn watch` to start auto-building when making changes to JS or CSS files.

- `cd` into `[PATH_TO_CRM_WEB]` and start your server using your preferred command documented [here](https://github.com/starburstlabs/crm-web#running-wealthbox) (e.g. `bin/docker/dev`).

##### Stopping Development

To stop using the local `helium-ui` package, and use the version specified in the `package.json` file of `crm-web`, you'll need to do the following:

- Stop the `yarn watch` process (`Ctrl+C`) in your local `helium-ui` repository directory.

- `yarn unlink helium-ui` in your interactive Docker shell

- Stop the `wb-docker-sync` process (`Ctrl+C`) for `helium-ui` using (you can let this run in the background if you prefer, but it will unnecessarily continue to use up a portion of your CPU).

### Icon Font Compilation Tooling

This project uses [FontCustom](https://github.com/FontCustom/fontcustom) to compile SVG icon assets into a custom font coupled with a generated stylesheet with icon classes.

#### Installing FontCustom

1. Download and install the MacOS FontForge app at <https://github.com/fontforge/fontforge/releases/tag/20220308>

2. Run the commands below to install fontcustom:

```
brew tap bramstein/webfonttools
brew update
brew install woff2 sfnt2woff eot-utils
gem install fontcustom
```

3. Add the FontForge `PATH` to your shell

- Example: `export PATH="$PATH:/Applications/FontForge.app/Contents/Resources/opt/local/bin"`

#### Compiling Helium Icons

1. Add or modify an svg icon asset in the `assets/icons` folder
2. Run `yarn svgo [PATH_TO_NEW_ICON]` to minimize/compress the svg assets
3. Run `fontcustom compile` command in the terminal (from the project root directory) to compile all svg assets into a custom font
4. You should now see the old font files have been removed, a set of new font files has been added, and a re-generated `_iconography.scss` stylesheet

### React Component Documentation Tooling

As part of the build process, we also generate React component documentation later used at <https://helium.wealthbox.com>. The below are already integrated into the `build` script, but here's a list of associated scripts and their use:

- `docs:generate` looks for components within this repository and generates a JSON file using `react-docgen` at `docs/components.json`.
- `docs:prettify` normalizes the output by running it through `prettier` with `prettier-plugin-sort-json` to handle the usecase where `react-docgen` would randomize the order of the components within the file, creating unnecessary git churn.
- `docs:clean` removes the `/docs` directory.

### Release Flow

**1. Create a new branch for the intended release, e.g. `release-1.2.3`**

- commit the version bump in `package.json` and add a blank `CHANGELOG.md` entry directly in the release branch
- set the milestone to the release version, e.g. `v1.2.3`

**2. Create a new alpha release:**

- set the title to `v1.2.3-alpha`
- point to branch `release-1.2.3`
- create a new tag `v1.2.3-alpha`
- set initial description to blank `CHANGELOG.md` entry

**3. Open discrete PRs for any new work (or rebase any deferred PRs) and base them on the `release-1.2.3` release branch**

- ensure the PR includes any relevant `CHANGELOG.md` notes for the given changeset
- set the PR milestone to the release version, e.g. `v1.2.3`

**4. Merge any PRs we intend to release into the main release branch `release-1.2.3`**

**5. Update the `v1.2.3-alpha` Release's description with the latest `CHANGELOG.md` entry**

**6. Test the release**

- open up a new branch in `crm-web` and update the `helium-ui` entry in `package.json` to `#v1.2.3-alpha`
- perform necessary code review any QA
- findings form `crm-web` can be addressed in separate PRs, reviewed and merged into the main `release-1.2.3` branch and therefore become available on the `v1.2.3-alpha` release tag

**7. When we're happy with the release, open a new PR for `Release v1.2.3` (using branch `release-1.2.3`) and merge it into `master`**

- make sure the date in the `CHANGELOG.md` entry is set to the current day

**8. Lastly, create a new final Release**

- set the title to `v1.2.3`
- point to branch `master`
- create a new tag `v1.2.3`
- set description to the final `CHANGELOG.md` entry
- update any related PRs (like the `helium-ui` release PR in `crm-web`) to point to the new `v1.2.3` stable tag, replacing previously used the `v1.2.3-alpha` tag
