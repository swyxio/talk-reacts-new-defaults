import fs from 'fs';
import path from 'path';

export function handler(event, context, callback) {
  const data = fs.readFileSync(path.resolve('./records/Abigail_Brand.json'));
  callback(null, {
    statusCode: 200,
    body: data
  });
}
