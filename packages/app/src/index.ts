'use strict'

import { Book } from 'dynamodb-models-lib';
import { LocalBook } from './local-lib';
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

const execute = async () => {
  
  console.log("Making a request with the Book object defined in the remote package")
  
  /** This should fail (see error, below) */
  try {
    await mapper.get(Object.assign(new Book, {id: 'dummy'}))
  } catch(err) {
    console.log("\n\nUsing the Book object from the remote package failed: \n");
    console.log(err);
  } // => EXPECTED ERROR:

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
    
  console.log("\n\n\nMaking a request with the LocalBook object defined in the local package")
  /** This should fail but with the "correct" reason... the tableName does not actually point to a real dynamodb table. */
  try {
    const resp = await mapper.get(Object.assign(new LocalBook, {id: 'dummy'}));
    console.log(`\n\n${resp}\n\n`)
  } catch (err) {
    console.log("\n\nUsing the LocalBook object from the local package functions correctly (However, there is an error because the backend table does not actually exist) \n\n");
    console.log(err);
  }
}

execute();