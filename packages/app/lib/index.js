'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var dynamodb_models_lib_1 = require("dynamodb-models-lib");
var dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
var DynamoDB = require("aws-sdk/clients/dynamodb");
var mapper = new dynamodb_data_mapper_1.DataMapper({
    client: new DynamoDB({ region: 'us-east-1' }) // the SDK client used to execute operations
});
/**
 * This will fail with the error:
 *
 *
 *
 */
mapper.get(Object.assign(new dynamodb_models_lib_1.Book, { id: 'dummy' })); // =>
//# sourceMappingURL=index.js.map