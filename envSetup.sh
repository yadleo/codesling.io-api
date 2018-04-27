#!/bin/sh

yarn &
echo "yarn" &
yarn buildEnv &
echo "yarn buildEnv" &
yarn setup &
echo "yarn setup"