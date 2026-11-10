/** A greeting for a name. */
export function greet(name) {
  return `Hello, ${name}!`;
}

/** A farewell for a name. */
export function farewell(name) {
  return `Goodbye, ${name}!`;
}

/** The greeting for a name in upper case. */
export function shout(name) {
  return greet(name).toUpperCase();
}
