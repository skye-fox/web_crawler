import { test, expect } from '@jest/globals';
import { normalizeURL } from './crawl';

test('removes the http://', () => {
  expect(normalizeURL('http://boot.dev/path')).toBe('boot.dev/path');
});

test('removes the https://', () => {
  expect(normalizeURL('https://boot.dev/path')).toBe('boot.dev/path');
});

test('removes the http:// & the trailing /', () => {
  expect(normalizeURL('http://boot.dev/path/to/stuff/')).toBe(
    'boot.dev/path/to/stuff',
  );
});

test('removes the https:// & the trailing /', () => {
  expect(normalizeURL('https://boot.dev/path/to/stuff/')).toBe(
    'boot.dev/path/to/stuff',
  );
});
