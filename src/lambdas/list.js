import fs from 'fs';
import path from 'path';
import { getDB } from './db/getdb';

export function handler(event, context, callback) {
  // params
  const timeout = event.queryStringParameters.delay || 100;
  const id = Number(event.queryStringParameters.id) || 0;

  // read
  let { data, count } = getDB();
  // pagination
  if (id > -1) {
    // return all if no id is specified
    data = data.slice(id, id + 3).map((obj, i) => ({ ...obj, id: id + i }));
  }
  // response
  setTimeout(
    () =>
      callback(null, {
        statusCode: 200,
        // body: data
        body: JSON.stringify({ data, count })
      }),
    Number(timeout)
  );
}
