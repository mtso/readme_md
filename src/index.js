// const fs = require('fs');
// const marked = require('marked');

/**
 * Parses a markdown file and returns HTML markup.
 * @param {string?} path - Filepath to README.md.
 * @returns {string} markup - HTML markup string.
 */
// const render = function(path) {
//   path = path || './README.md';
//   const raw = fs.readFileSync(path).toString();
//   return marked(raw);
// };

// render.markup = render.readme = render('./README.md');

// module.exports = render;


import fs from 'fs'
import marked from 'marked'

export const renderMarkup = function(path) {
  path = path || './README.md'
  const raw = fs.readFileSync(path).toString();
  return marked(raw)
}

export default renderMarkup()


