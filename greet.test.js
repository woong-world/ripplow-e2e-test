import assert from 'node:assert/strict';
import { test } from 'node:test';
import { farewell, greet, shout } from './greet.js';

test('greets by name', () => {
  assert.equal(greet('Ripplow'), 'Hello, Ripplow!');
});

test('says farewell by name', () => {
  assert.equal(farewell('Ripplow'), 'Goodbye, Ripplow!');
});

test('shouts the greeting in upper case', () => {
  assert.equal(shout('Ripplow'), 'HELLO, RIPPLOW!');
});
