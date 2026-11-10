import assert from 'node:assert/strict';
import { test } from 'node:test';
import { farewell, greet, yell } from './greet.js';

test('greets by name', () => {
  assert.equal(greet('Ripplow'), 'Hello, Ripplow!');
});

test('says farewell by name', () => {
  assert.equal(farewell('Ripplow'), 'Goodbye, Ripplow!');
});

test('yells by name', () => {
  assert.equal(yell('Ann'), 'Hello, Ann!!!');
});

test('trims spaces when yelling', () => {
  assert.equal(yell('  Ann  '), 'Hello, Ann!!!');
});
