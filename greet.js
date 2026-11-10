/** A greeting for a name, using `greeting` (default 'Hello'). */
export function greet(name, greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

/** A farewell for a name. */
export function farewell(name) {
  return `Goodbye, ${name}!`;
}
