#!/usr/bin/env bash
IMAGE_REF=ghcr.io/starburstlabs/wb-docker-sync:latest
FOUND=0

function ctrl_c() {
  echo "Stopping Sync process"
  FOUND=1
}

SCRIPT_PATH=$(dirname "$0")
SCRIPT_PATH=$(eval "cd \"$SCRIPT_PATH\" && pwd")
cd $SCRIPT_PATH
HELIUM_DIR=$($SCRIPT_PATH/findHeliumRoot.sh $PWD)
DIR_HANDLE=$($SCRIPT_PATH/calculateSyncVolume.sh $HELIUM_DIR)

PID_FILE=$HELIUM_DIR/tmp/pids/docker-sync.pid

VOLUME_STATUS="Exists"
docker volume inspect $DIR_HANDLE >>/dev/null
if [ $? -ne 0 ]; then
   VOLUME_STATUS="Does not Exist"
fi

CONTAINER_STATUS="Does not Exist"
docker container inspect $DIR_HANDLE >>/dev/null
if [ $? -eq 0 ]; then
   CONTAINER_STATE=`docker container inspect $DIR_HANDLE | jq -r '.[0].State.Status'`
   CONTAINER_STATUS="exists and is $CONTAINER_STATE"
fi

SYNC_PROCESS="not running"
if test -f "$PID_FILE"; then
    ps -p `cat $PID_FILE` >>/dev/null
    if [ $? -eq 0 ]; then
      SYNC_PROCESS="running"
    fi
fi

echo "Docker Sync Status:"
echo -e "\tVolume ${DIR_HANDLE} ${VOLUME_STATUS}."
echo -e "\tDocker Container ${DIR_HANDLE} ${CONTAINER_STATUS}."
echo -e "\tUnison Process is ${SYNC_PROCESS}."
