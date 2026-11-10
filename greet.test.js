import assert from 'node:assert/strict';
import { test } from 'node:test';
import { farewell, greet, wave } from './greet.js';

test('greets by name', () => {
  assert.equal(greet('Ripplow'), 'Hello, Ripplow!');
});

test('says farewell by name', () => {
  assert.equal(farewell('Ripplow'), 'Goodbye, Ripplow!');
});

test('waves by name', () => {
  assert.equal(wave('Ripplow'), '👋 Ripplow');
});
