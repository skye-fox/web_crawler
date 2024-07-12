//import { stdin as input, stdout as output, argv, exit } from 'node:process';
import process from 'node:process';
import { crawlPage } from './crawl.js';

function main() {
  if (process.argv.length < 3) {
    console.log('Please enter the url of the site you would like to crawl.');
    return;
  } else if (process.argv.length > 3) {
    console.log(
      'This program accepts at most one argument in the form of a url',
    );
    return;
  } else {
    console.log(`Starting crawler at ${process.argv[2]}...`);
    crawlPage(process.argv[2]);
    //process.exit();
  }
}

main();
