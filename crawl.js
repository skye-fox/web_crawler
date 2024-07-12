import { JSDOM } from 'jsdom';

const normalizeURL = (url) => {
  const newURL = new URL(url);
  return `${newURL.hostname}${newURL.pathname}`.replace(/\/$/, '');
};

const getURLsFromHTML = (htmlBody, baseURL) => {
  const dom = new JSDOM(htmlBody);
  const urls = [];
  const anchors = dom.window.document.querySelectorAll('a');
  for (const anchor of anchors) {
    const url = anchor.getAttribute('href');

    const newURL = new URL(url, baseURL).href;
    urls.push(newURL);
  }
  return urls;
};

export { normalizeURL, getURLsFromHTML };
