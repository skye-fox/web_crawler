import process from 'node:process';
import { crawlPage } from './crawl.js';

async function main() {
  if (process.argv.length < 3) {
    console.log('Please enter the url of the site you would like to crawl.');
    return;
  } else if (process.argv.length > 3) {
    console.log(
      'This program accepts at most one argument in the form of a url',
    );
    return;
  } else {
    const result = await crawlPage(process.argv[2]);
    console.log(`Current page counts: ${JSON.stringify(result, null, 2)}`);
  }
}

main();
