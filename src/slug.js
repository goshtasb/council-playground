'use strict';

/**
 * Turns a title into a URL slug: lowercase, words joined by single dashes.
 * An empty title yields an empty slug. Accented Latin letters are reduced to
 * their base letter via NFD decomposition (é→e, ü→u, ñ→n).
 * Known gaps: the result is not length-limited, and letters that do not
 * decompose under NFD (e.g. æ, ø) or non-Latin scripts are still dropped.
 */
function slugify(title) {
  if (typeof title !== 'string') {
    throw new TypeError('slugify: title must be a string');
  }
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

module.exports = { slugify };
