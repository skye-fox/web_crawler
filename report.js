const printReport = (pages) => {
  console.log('\nBeginning report...');
  const sortedPages = sortPages(pages);

  for (const [key, value] of Object.entries(sortedPages)) {
    console.log(`Found ${value} internal links to ${key}`);
  }
};

const sortPages = (pages) => {
  return Object.fromEntries(
    Object.entries(pages).sort(([, a], [, b]) => b - a),
  );
};

export { printReport };
