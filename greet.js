/** A greeting for a name. */
export function greet(name) {
  return `Hello, ${name}!`;
}

/** A farewell for a name. */
export function farewell(name) {
  return `Goodbye, ${name}!`;
}

/** A greeting for each name, in the same order. */
export function greetAll(names) {
  return names.map((name) => greet(name));
}
