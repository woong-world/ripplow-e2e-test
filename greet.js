/** A greeting for a name, using the given greeting word (default "Hello"). */
export function greet(name, greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

/** A farewell for a name. */
export function farewell(name) {
  return `Goodbye, ${name}!`;
}
