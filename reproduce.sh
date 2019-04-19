#!bin/bash
cd dynamodb-models-lib
yarn install
yarn build
yarn link
cd ../app
yarn install
yarn build
yarn link dynamodb-models-lib

echo You should see an error:
echo

yarn test