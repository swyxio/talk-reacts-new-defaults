import fs from 'fs';
import path from 'path';
import { getDB } from './db/getdb';

export function handler(event, context, callback) {
  // params
  const timeout = event.queryStringParameters.delay || 100;
  let id = Number(event.queryStringParameters.id) || 0;

  // should sanitize id, but for now we cheat
  if (id > 290) id = 290;

  // read
  let { data } = getDB();
  // pagination
  data = data[id];
  // response
  setTimeout(
    () =>
      callback(null, {
        statusCode: 200,
        // body: data
        body: JSON.stringify(data)
      }),
    Number(timeout)
  );
}
