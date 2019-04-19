'use strict'

import { Book } from 'dynamodb-models-lib';
import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');

const mapper = new DataMapper({
    client: new DynamoDB({region: 'us-east-1'}) // the SDK client used to execute operations
});

/**
 * This will fail with the error:
 * 
 * 
 * 
 */
mapper.get(Object.assign(new Book, {id: 'dummy'})) // =>

// EXPECTED ERROR:

// (node:30241) UnhandledPromiseRejectionWarning: Error: The provided item did not adhere to the DynamoDbDocument protocol. No object property was found at the `DynamoDbSchema` symbol
//     at Object.getSchema (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/@aws/dynamodb-data-mapper/build/protocols.js:40:11)
//     at DataMapper.<anonymous> (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/@aws/dynamodb-data-mapper/build/DataMapper.js:637:46)
//     at step (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/tslib/tslib.js:133:27)
//     at Object.next (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/tslib/tslib.js:114:57)
//     at /Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/tslib/tslib.js:107:75
//     at new Promise (<anonymous>)
//     at Object.__awaiter (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/tslib/tslib.js:103:16)
//     at DataMapper.get (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/@aws/dynamodb-data-mapper/build/DataMapper.js:623:24)
//     at Object.<anonymous> (/Users/user/Development/dynamodb-annotations-failure/packages/app/lib/index.js:14:8)
//     at Module._compile (internal/modules/cjs/loader.js:722:30)
// (node:30241) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
// (node:30241) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.