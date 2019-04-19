# dynamodb-annotations-failure
A reproduction of a dynamodb annotations error that occurs when using multiple packages.

## Contents
Two packages.
 - dynamodb-models-lib
    - Use case: somebody wants to create a common library of dynamodb objects to share across multiple projects. Thus, the library should be its own package. This models lib contains a simple Book object (the book object does NOT need an actual backend table, the error occurs before a network request )
 - app
    - This is a simple test app that attempts to import the Book object from the `dynamodb-models-lib` (which is accessed locally using `yarn link`) and perform a query using `data-mapper`.
    - This app also contains a local (same package) Book object called "LocalBook". It is exported/imported the same way as `dynamodb-models-lib` is exported/imported, except it comes from the same package. `LocalBook` functions correctly (even thoug h the network request errors due to the dynamo table not actually existing) while `Book` does not perform correctly.
 
## To Reproduce
```
  git clone https://github.com/ajhool/dynamodb-annotations-failure.git
  cd dynamodb-annotations-failure
```

You can either execute the script: `reproduce.sh`
Or manually enter the commands found in reproduce.sh

## The Failure:

```

(node:30241) UnhandledPromiseRejectionWarning: Error: The provided item did not adhere to the DynamoDbDocument protocol. No object property was found at the `DynamoDbSchema` symbol
    at Object.getSchema (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/@aws/dynamodb-data-mapper/build/protocols.js:40:11)
    at DataMapper.<anonymous> (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/@aws/dynamodb-data-mapper/build/DataMapper.js:637:46)
    at step (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/tslib/tslib.js:133:27)
    at Object.next (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/tslib/tslib.js:114:57)
    at /Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/tslib/tslib.js:107:75
    at new Promise (<anonymous>)
    at Object.__awaiter (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/tslib/tslib.js:103:16)
    at DataMapper.get (/Users/user/Development/dynamodb-annotations-failure/packages/app/node_modules/@aws/dynamodb-data-mapper/build/DataMapper.js:623:24)
    at Object.<anonymous> (/Users/user/Development/dynamodb-annotations-failure/packages/app/lib/index.js:14:8)
    at Module._compile (internal/modules/cjs/loader.js:722:30)
(node:30241) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:30241) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
