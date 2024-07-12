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

const crawlPage = async (url) => {
  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    throw new Error(`Network error: ${e.message}`);
  }

  if (response.status > 399) {
    console.log(`Error: ${response.status} - ${response.statusText}`);
    return;
  }

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('text/html')) {
    console.log(`content type: ${contentType} is not html`);
    return;
  }

  const html = await response.text();
  console.log(`html: ${html}`);
};

export { normalizeURL, getURLsFromHTML, crawlPage };
