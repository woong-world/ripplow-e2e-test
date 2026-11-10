import assert from 'node:assert/strict';
import { test } from 'node:test';
import { farewell, greet } from './greet.js';

test('greets by name', () => {
  assert.equal(greet('Ripplow'), 'Hello, Ripplow!');
});

test('greets a stranger when the name is empty or only spaces', () => {
  assert.equal(greet(''), 'Hello, stranger!');
  assert.equal(greet('   '), 'Hello, stranger!');
});

test('says farewell by name', () => {
  assert.equal(farewell('Ripplow'), 'Goodbye, Ripplow!');
});
