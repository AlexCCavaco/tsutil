/**
 * Option type is a type that represents an optional value.
 *
 * This is similar to the `undefined | T` type, but it makes it clear
 * in the code that the value may be missing.
 *
 * It is often used as a return type for functions that may not
 * find a value, or as a field type in a data structure to indicate
 * that the field may be missing.
 */
export type Option<T> = T | undefined;
