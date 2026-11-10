/** A greeting for a name. */
export function greet(name) {
  return `Hello, ${name}!`;
}

/** A farewell for a name. */
export function farewell(name) {
  return `Goodbye, ${name}!`;
}

/** The greeting for a trimmed name in lower case. */
export function whisper(name) {
  return greet(name.trim()).toLowerCase();
}
