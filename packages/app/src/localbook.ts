'use strict'
import {
  attribute,
  hashKey,
  table,
} from '@aws/dynamodb-data-mapper-annotations';

// NOTE: You don't need a real table to test this bug. It should fail before the table name is used.
@table('local_book_table')
class LocalBook {
  @hashKey()
  id!: string;

  @attribute()
  completed?: boolean;
}

export default LocalBook;