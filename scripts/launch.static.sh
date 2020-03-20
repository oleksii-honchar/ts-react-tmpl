#!/usr/bin/env bash
envFile="$PWD/configs/envs/local.env"
env-cmd -f $envFile "$PWD/devops/local/scripts/check-env-vars.sh"

env-cmd -f $envFile ./scripts/kill-node-zombies.sh
env-cmd -f $envFile ./devops/local/scripts/check-env-vars.sh

#!env-cmd $envFile nodemon --inspect ./src/index.dev.js

env-cmd -f $envFile nodemon --delay 2 ./devops/local/wast/index.tsx