import assert from 'node:assert/strict';
import { test } from 'node:test';
import { farewell, greet } from './greet.js';

test('greets by name', () => {
  assert.equal(greet('Ripplow'), 'Hello, Ripplow!');
});

test('greets with a custom greeting', () => {
  assert.equal(greet('Ripplow', 'Hi'), 'Hi, Ripplow!');
});

test('says farewell by name', () => {
  assert.equal(farewell('Ripplow'), 'Goodbye, Ripplow!');
});
