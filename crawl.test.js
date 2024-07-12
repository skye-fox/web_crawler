import { test, expect } from '@jest/globals';
import { normalizeURL, getURLsFromHTML } from './crawl';

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

test('relative URL to absolute URL', () => {
  expect(
    getURLsFromHTML(
      '<html><body><a href="/path/to/somewhere/">boot.dev</a></body></html>',
      'https://blog.boot.dev',
    ),
  ).toEqual(['https://blog.boot.dev/path/to/somewhere/']);
});

test('relative URL to absolute URL & absolute URL', () => {
  const inputURL = 'https://blog.boot.dev';
  const inputBody =
    '<html><body><a href="/path/to/somewhere/">boot.dev</a><a href="https://www.example.com/path/to/somewhere/">example.com</a></body></html>';
  const actual = getURLsFromHTML(inputBody, inputURL);
  const expected = [
    'https://blog.boot.dev/path/to/somewhere/',
    'https://www.example.com/path/to/somewhere/',
  ];
  expect(actual).toEqual(expected);
});
