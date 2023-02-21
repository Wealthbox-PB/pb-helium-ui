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

### Local Development

**There is currently no way to develop this package standalone.** You'll need to work on it alongside [https://github.com/starburstlabs/crm-web](https://github.com/starburstlabs/crm-web) or [https://github.com/starburstlabs/helium-docs](https://github.com/starburstlabs/helium-docs).

#### Development with `crm-web` using Docker

This setup is pretty cumbersome and painful. We're hoping to integrate some of these steps into the existing scripts, but for now, this will get us a livereload `crm-web` environment that listens for changes in your local `helium-ui` repo as if it was a part of `crm-web`.

##### Initial Setup (You only have to do this once)

- `docker volume create yarn-cache`
- Open `docker-utils/wb-docker-sync` in a new terminal window and run `./start.sh [PATH_TO_HELIUM_UI]` to create a new volume and start the file sync process.
- Open another terminal window/pane and run `docker volume ls | grep helium-ui` to get the name of the volume.
- Copy the volume name (generated from the path passed into the `./start` script in the first step) — we'll need it later.
  - It should look something like `Users-[username]-[directory]-helium-ui`
- Open `crm-web` and run `DOCKER_OPTIONS="--mount source=[HELIUM_UI_DOCKER_VOLUME_NAME],target=/helium-ui --mount source=yarn-cache,target=/usr/local/share/.config/yarn" bin/docker/interactive.sh` to open the interactive shell (_be sure to replace the `[HELIUM_UI_DOCKER_VOLUME_NAME]` source with the volume name you copied in the previous step_). There are 2 main parts to this command:
  - **1)** The first part sets an environment variable called `DOCKER_OPTIONS` which mounts the `helium-ui` volume that's synced with your local `helium-ui` repository, as well as `yarn-cache` which enables us to to link packages inside of the Docker container (save these options somewhere safe, because we'll need them to prefix all Docker commands while doing local Helium UI development)
  - **2)** The second part is the Docker command for opening the interactive shell
- `export YARN_LINK_FOLDER="/usr/local/cache/yarn"` while in the wealthbox Docker shell started using the previous command
- `cd node_modules/react` and `yarn link` to register the `react` package
- `cd ../react-dom` and `yarn link` to register the `react-dom` package
- `cd /helium-ui` and `yarn link react react-dom` to create symlinks using the registered packages and use the versions used in `crm-web`
  - This fixes an error when compiling about there being 2 versions of React.
- `yarn link` while still in `/helium-ui` to register the `helium-ui` package
- `cd /wealthbox` and `yarn link helium-ui` to create a symlink to Helium UI

##### Starting Development

- Open `docker-utils/wb-docker-sync` in a new terminal window.
- If you don't already have it running from the Initial Setup step above, `./start.sh [PATH_TO_HELIUM_UI]` to start the docker sync process.
- If you don't already have `crm-web` sync running, start it with `./start.sh [PATH_TO_CRM_WEB]` in another window/pane.
- Open your local `helium-ui` repo directory (on your local machine, not in the wealthbox Docker shell) and run `yarn watch` to start auto-building when making changes to JS or CSS files.
- Open your `crm-web` repository directory and start your server using your preferred command documented [here](https://github.com/starburstlabs/crm-web#running-wealthbox), prefixed with the `DOCKER_OPTIONS`:
  - for `bin/dev`:
    ```
    DOCKER_OPTIONS="--mount source=[HELIUM_UI_DOCKER_VOLUME_NAME],target=/helium-ui --mount source=yarn-cache,target=/usr/local/share/.config/yarn" bin/dev
    ```
  - for `bin/dev_server`:
    ```
    DOCKER_OPTIONS="--mount source=[HELIUM_UI_DOCKER_VOLUME_NAME],target=/helium-ui --mount source=yarn-cache,target=/usr/local/share/.config/yarn" bin/dev_server
    ```
  - for `bin/dev_frontend`:
    ```
    DOCKER_OPTIONS="--mount source=[HELIUM_UI_DOCKER_VOLUME_NAME],target=/helium-ui --mount source=yarn-cache,target=/usr/local/share/.config/yarn" bin/dev_frontend
    ```

##### Stopping Development

To stop using the local `helium-ui` package, and use the version specified in the `package.json` file of `crm-web`, you'll need to do the following:

- Stop the `yarn watch` process (`Ctrl+C`) in your local `helium-ui` repository directory.
- `yarn unlink helium-ui` in your interactive Docker shell
- Stop the `wb-docker-sync` process (`Ctrl+C`) for `helium-ui` using (you can let this run in the background if you prefer, but it will unnecessarily continue to use up a portion of your CPU).
- Stop any running `/bin` commands and start them without `DOCKER_OPTIONS` instead for vanilla `crm-web` development.

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
