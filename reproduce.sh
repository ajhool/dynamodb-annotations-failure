#!/bin/bash
cd packages/dynamodb-models-lib
yarn install
yarn build
yarn link
cd ../app
yarn install
yarn build
yarn link dynamodb-models-lib

echo Running test. You should see two errors. The first is the bug, and the second is actually a successful network request that results in an error due to the \"books\" table not existing
echo
echo

yarn test