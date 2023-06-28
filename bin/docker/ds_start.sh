#!/usr/bin/env bash
IMAGE_REF=ghcr.io/starburstlabs/wb-docker-sync:latest
FOUND=0

function ctrl_c() {
  echo "Stopping Sync process"
  FOUND=1
}

sync() {
  HELIUM_DIR=$1
  DIR_HANDLE=$2
  PORT=$(docker inspect --format '{{ (index (index .NetworkSettings.Ports "3000/tcp") 0).HostPort }}' $DIR_HANDLE)
  UNISON_CMD="unison $HELIUM_DIR socket://localhost:$PORT/target -batch -ignorelocks -ignorecase false -ignore 'Name {.git,.DS_Store,.bundle,tmp/cache}'"
  mkdir -p $HELIUM_DIR/tmp/docker_sync
  LOG_FILE=$HELIUM_DIR/tmp/docker_sync/unison_$(date "+%Y.%m.%d-%H.%M.%S").log

  # Delete all by the last 5 log files for this DIR_HANDLE
  ls -tp $HELIUM_DIR/tmp/docker_sync/unison_*.log | grep -v '/$' | tail -n +5 | xargs -I {} rm -- {}

  echo "Docker Sync Logs for Process ID: PID $$ started on: $(date)" >>$LOG_FILE
  echo "Initial Sync of $HELIUM_DIR  to Volume $DIR_HANDLE"
  eval "$UNISON_CMD"
  echo "Starting background sync of $HELIUM_DIR.  Logs can be found at: $LOG_FILE"
  while [ $FOUND -eq 0 ]; do
    eval "$UNISON_CMD -silent >> $LOG_FILE 2>&1"
    sleep 1
  done
}

SCRIPT_PATH=$(dirname "$0")
SCRIPT_PATH=$(eval "cd \"$SCRIPT_PATH\" && pwd")
cd $SCRIPT_PATH
HELIUM_DIR=$($SCRIPT_PATH/findHeliumRoot.sh $PWD)
DIR_HANDLE=$($SCRIPT_PATH/calculateSyncVolume.sh $HELIUM_DIR)

mkdir -p $HELIUM_DIR/tmp/pids

PID_FILE=$HELIUM_DIR/tmp/pids/docker-sync.pid
if test -f "$PID_FILE"; then
  $SCRIPT_PATH/ds_stop.sh
fi

docker volume inspect $DIR_HANDLE >>/dev/null

if [ $? -ne 0 ]; then
  docker volume create $DIR_HANDLE
fi

docker container inspect $DIR_HANDLE >>/dev/null

if [ $? -ne 0 ]; then
  if [ $(uname -m) == "arm64" ]; then
    PLATFORM=linux/arm64
  else
    PLATFORM=linux/amd64
  fi

  docker create --platform=$PLATFORM --mount source=$DIR_HANDLE,target=/target \
    -p 3000 \
    --name $DIR_HANDLE \
    $IMAGE_REF
fi

docker start $DIR_HANDLE

sync $HELIUM_DIR $DIR_HANDLE &
SYNC_PID=$!
echo "$SYNC_PID" >$PID_FILE

exit 0
