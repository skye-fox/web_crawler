const normalizeURL = (url) => {
  const newURL = new URL(url);
  return `${newURL.hostname}${newURL.pathname}`.replace(/\/$/, '');
};

export { normalizeURL };
