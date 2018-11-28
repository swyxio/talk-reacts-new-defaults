import fs from 'fs';
import path from 'path';

export function getDB(event, context, callback) {
  // read
  const dir = fs.readdirSync(path.resolve('./records'));
  let data = dir
    .map(file => {
      const obj = JSON.parse(
        fs.readFileSync(path.resolve('./records/' + file))
      );
      obj.file = file;
      return obj;
    })
    .filter(a => a.authors.includes('Stan Lee'))
    .sort((b, a) => a.ranking.storyCount - b.ranking.storyCount);

  const count = data.length;
  if (callback) {
    callback(null, {
      statusCode: 200,
      // body: data
      body: JSON.stringify({ data, count })
    });
  }
  return { data, count };
}
