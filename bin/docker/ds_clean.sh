#!/usr/bin/env bash
SCRIPT_PATH=$(dirname "$0")
SCRIPT_PATH=$(eval "cd \"$SCRIPT_PATH\" && pwd")
cd $SCRIPT_PATH
HELIUM_DIR=$($SCRIPT_PATH/findHeliumRoot.sh $PWD)
DIR_HANDLE=$($SCRIPT_PATH/calculateSyncVolume.sh $HELIUM_DIR)

$SCRIPT_PATH/ds_stop.sh

echo "Stopping container $DIR_HANDLE ...."
docker stop $DIR_HANDLE
echo "Removing container $DIR_HANDLE ...."
docker container rm $DIR_HANDLE
echo "Removing volume $DIR_HANDLE ...."
docker volume rm $DIR_HANDLE
