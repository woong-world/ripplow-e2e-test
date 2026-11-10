/** A greeting for a name. */
export function greet(name) {
  const who = name.trim() === '' ? 'stranger' : name;
  return `Hello, ${who}!`;
}

/** A farewell for a name. */
export function farewell(name) {
  return `Goodbye, ${name}!`;
}
