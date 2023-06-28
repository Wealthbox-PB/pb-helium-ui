#!/usr/bin/env bash
IMAGE_REF=ghcr.io/starburstlabs/wb-docker-sync:latest
FOUND=0

SCRIPT_PATH=$(dirname "$0")
SCRIPT_PATH=$(eval "cd \"$SCRIPT_PATH\" && pwd")
cd $SCRIPT_PATH
HELIUM_DIR=$($SCRIPT_PATH/findHeliumRoot.sh $PWD)
DIR_HANDLE=$($SCRIPT_PATH/calculateSyncVolume.sh $HELIUM_DIR)
docker volume inspect $DIR_HANDLE >>/dev/null

PID_FILE=$HELIUM_DIR/tmp/pids/docker-sync.pid
if test -f "$PID_FILE"; then
  DOCKER_SYNC_PID=$(cat $PID_FILE)
  echo "Stopping Docker Sync process of $HELIUM_DIR with Process ID: $DOCKER_SYNC_PID"
  kill $DOCKER_SYNC_PID
  rm $PID_FILE
else
  echo "Docker Unison Sync process does not apear to be running."
fi

docker container inspect $DIR_HANDLE >>/dev/null

if [ $? -eq 0 ]; then
  echo "Stopping Docker Container $DIR_HANDLE"
  docker stop $DIR_HANDLE
fi
