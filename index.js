const fs = require('fs')
const marked = require('marked')

/**
 * Parses README.md file and returns HTML markup.
 * @param {string?} path - Filepath to README.md.
 * @returns {string} markup - HTML markup string.
 */
const markup = (function() {
  const path = './README.md'
  const raw = fs.readFileSync(path).toString()
  return marked(raw)
})()

module.exports = markup
