export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && isFinite(value);
}

export function isObject(value: unknown): value is object {
  return typeof value === "object";
}

export function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function isFunction(
  value: unknown,
): value is (...args: unknown[]) => unknown {
  return typeof value === "function";
}

export function raise(message: string): never {
  throw new Error(message);
}
