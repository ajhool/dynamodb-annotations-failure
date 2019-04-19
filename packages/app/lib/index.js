'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var dynamodb_models_lib_1 = require("dynamodb-models-lib");
var local_lib_1 = require("./local-lib");
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
var execute = function () { return __awaiter(_this, void 0, void 0, function () {
    var err_1, resp, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Making a request with the Book object defined in the remote package");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, mapper.get(Object.assign(new dynamodb_models_lib_1.Book, { id: 'dummy' }))];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.log("\n\nUsing the Book object from the remote package failed: \n");
                console.log(err_1);
                return [3 /*break*/, 4];
            case 4:
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
                console.log("\n\n\nMaking a request with the LocalBook object defined in the local package");
                _a.label = 5;
            case 5:
                _a.trys.push([5, 7, , 8]);
                return [4 /*yield*/, mapper.get(Object.assign(new local_lib_1.LocalBook, { id: 'dummy' }))];
            case 6:
                resp = _a.sent();
                console.log("\n\n" + resp + "\n\n");
                return [3 /*break*/, 8];
            case 7:
                err_2 = _a.sent();
                console.log("\n\nUsing the LocalBook object from the local package functions correctly (However, there is an error because the backend table does not actually exist) \n\n");
                console.log(err_2);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
execute();
//# sourceMappingURL=index.js.map