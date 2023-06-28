#!/usr/bin/env bash

echo $1 | sed 's/\///' | sed 's/\//-/g' | tail -c 200
