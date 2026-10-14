const test = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../src/slug.js');

test('words become dash-separated lowercase', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('punctuation collapses into one dash', () => {
  assert.equal(slugify('Add Stripe: webhook idempotency!'), 'add-stripe-webhook-idempotency');
});

test('empty title returns an empty slug', () => {
  assert.equal(slugify(''), '');
});

test('non-string title still throws TypeError', () => {
  assert.throws(() => slugify(null), TypeError);
});

test('accented letters are transliterated to their base letter', () => {
  assert.equal(slugify('Café Niño'), 'cafe-nino');
});
