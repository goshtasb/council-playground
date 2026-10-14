const test = require('node:test');
const assert = require('node:assert/strict');
const { slugify } = require('../src/slug.js');

test('words become dash-separated lowercase', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('punctuation collapses into one dash', () => {
  assert.equal(slugify('Add Stripe: webhook idempotency!'), 'add-stripe-webhook-idempotency');
});
