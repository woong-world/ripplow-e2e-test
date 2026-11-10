import assert from 'node:assert/strict';
import { test } from 'node:test';
import { farewell, greet, whisper } from './greet.js';

test('greets by name', () => {
  assert.equal(greet('Ripplow'), 'Hello, Ripplow!');
});

test('says farewell by name', () => {
  assert.equal(farewell('Ripplow'), 'Goodbye, Ripplow!');
});

test('whispers the greeting in lower case', () => {
  assert.equal(whisper('Ripplow'), 'hello, ripplow!');
});
