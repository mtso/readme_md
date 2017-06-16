import fs from 'fs'
import marked from 'marked'

/**
 * Parses a markdown file and returns HTML markup.
 * @param {String?} path - Filepath to README.md.
 * @returns {String} markup - HTML markup string.
 */
export const renderMarkup = function(path) {
  path = path || './README.md'
  const raw = fs.readFileSync(path).toString();
  return marked(raw)
}

export default renderMarkup()
