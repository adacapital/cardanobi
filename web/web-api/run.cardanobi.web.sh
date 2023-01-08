#!/bin/bash

# loading important environment variables by forcing .bashrc to be reloaded
# useful as this script will be run as a systemd service for which no env variable are preloaded
eval "$(cat ~/.bashrc | tail -n +10)"

NOW=`date +"%Y%m%d %H:%M:%S"`
SCRIPT_DIR="$(realpath "$(dirname "$0")")"

cd $SCRIPT_DIR
export NODE_ENV=production
export PORT=4431
sudo NODE_ENV=production PORT=4431 npm run start