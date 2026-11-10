import assert from 'node:assert/strict';
import { test } from 'node:test';
import { farewell, greet, greetAll } from './greet.js';

test('greets by name', () => {
  assert.equal(greet('Ripplow'), 'Hello, Ripplow!');
});

test('says farewell by name', () => {
  assert.equal(farewell('Ripplow'), 'Goodbye, Ripplow!');
});

test('greets each name in order', () => {
  assert.deepEqual(greetAll(['Ada', 'Ripplow']), ['Hello, Ada!', 'Hello, Ripplow!']);
  assert.deepEqual(greetAll([]), []);
});
