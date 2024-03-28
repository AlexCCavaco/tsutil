/**
 * Check if the given value is a string.
 *
 * @param {unknown} value The value to check
 *
 * @returns {value is string} True if the value is a string, false otherwise
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

/**
 * Check if the given value is a number.
 *
 * @param {unknown} value The value to check
 *
 * @returns {value is number} True if the value is a number, false otherwise
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number" && isFinite(value);
}

/**
 * Check if the given value is an object.
 *
 * This function checks if the value is an object and not null.
 *
 * @param {unknown} value The value to check
 *
 * @returns {value is object} True if the value is an object, false otherwise
 */
export function isObject(value: unknown): value is object {
  return typeof value === "object";
}

/**
 * Check if the given value is null or undefined.
 *
 * This function checks if the value is either null or undefined.
 *
 * @param {unknown} value The value to check
 *
 * @returns {value is null | undefined} True if the value is null or undefined, false otherwise
 */
export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Check if the given value is a function.
 *
 * This function checks if the value is a function (not an arrow function or
 * an object with a call method) and not null.
 *
 * @param {unknown} value The value to check
 *
 * @returns {value is (...args: unknown[]) => unknown} True if the value is a function, false otherwise
 */
export function isFunction(
  value: unknown,
): value is (...args: unknown[]) => unknown {
  return typeof value === "function";
}

/**
 * Raise an error with the given message.
 *
 * This function raises an error with the given message and stops the
 * execution of the program. It is used for situations where the
 * error is not recoverable and the program needs to stop.
 *
 * @param {string} message The error message to raise
 *
 * @returns {never} Never returns, the program stops with an error
 */
export function raise(message: string): never {
  throw new Error(message);
}
