#!/usr/bin/env bash

## Find the helium-ui root directory
HELIUM_DIR=$1
while [ ! -z "$HELIUM_DIR" ] && [ ! -f "$HELIUM_DIR/yarn.lock" ]; do
    HELIUM_DIR="${HELIUM_DIR%\/*}"
done

echo $HELIUM_DIR
