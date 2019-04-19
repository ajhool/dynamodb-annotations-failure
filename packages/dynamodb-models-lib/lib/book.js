'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamodb_data_mapper_annotations_1 = require("@aws/dynamodb-data-mapper-annotations");
// NOTE: You don't need a real table to test this bug. It should fail before the table name is used.
var Book = /** @class */ (function () {
    function Book() {
    }
    __decorate([
        dynamodb_data_mapper_annotations_1.hashKey(),
        __metadata("design:type", String)
    ], Book.prototype, "id", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute(),
        __metadata("design:type", Boolean)
    ], Book.prototype, "completed", void 0);
    Book = __decorate([
        dynamodb_data_mapper_annotations_1.table('book_table')
    ], Book);
    return Book;
}());
exports.default = Book;
//# sourceMappingURL=book.js.map