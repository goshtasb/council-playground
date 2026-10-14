'use strict';

/**
 * Turns a title into a URL slug: lowercase, words joined by single dashes.
 * Known gaps: an empty title throws, accented letters are dropped instead of
 * transliterated, and the result is not length-limited.
 */
function slugify(title) {
  if (typeof title !== 'string' || title.length === 0) {
    throw new TypeError('slugify: title must be a non-empty string');
  }
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

module.exports = { slugify };
