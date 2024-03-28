/**
 * Response type is used to represent a result of an operation that
 * may succeed or fail. If the operation succeeded, the `data` field
 * will contain the successful result, otherwise the `err` field will
 * contain the error message.
 */
export type Response<T, Err = string> = { data: T } | { err: Err };

/**
 * Handle function and return response type. If function throws an error, the
 * response will contain the error message, otherwise it will contain the
 * successful result of the function.
 *
 * @template T The type of the successful result
 * @template P The type of the function parameters
 *
 * @param {(this: ThisParameterType<Fn>, ...params: P) => T} fn The function to handle
 *
 * @returns {(this: ThisParameterType<Fn>, ...params: P) => Response<T>} The function that returns the response
 */
export function handleErr<T, P extends unknown[]>(
  fn: (...params: P) => T,
): (...params: P) => Response<T> {
  return (...params: P) => {
    try {
      return { data: fn(...params) };
    } catch (e) {
      if (e instanceof Error) {
        return { err: e.message };
      } else {
        return { err: String(e) };
      }
    }
  };
}

/**
 * Handle async function and return response type. If function throws an error, the
 * response will contain the error message, otherwise it will contain the
 * successful result of the function.
 *
 * @template T The type of the successful result
 * @template P The type of the function parameters
 *
 * @param {(this: ThisParameterType<Fn>, ...params: P) => Promise<T>} fn The function to handle
 *
 * @returns {(this: ThisParameterType<Fn>, ...params: P) => Promise<Response<T>>} The function that returns the response
 */
export function handleErrAsync<T, P extends unknown[]>(
  fn: (...params: P) => Promise<T>,
): (...params: P) => Promise<Response<T>> {
  return async (...params: P) => {
    try {
      return { data: await fn(...params) };
    } catch (e) {
      if (e instanceof Error) {
        return { err: e.message };
      } else {
        return { err: String(e) };
      }
    }
  };
}

/**
 * Create a successful response with the given data.
 *
 * @template T The type of the successful result
 *
 * @param {T} data The successful result to put in the response
 *
 * @returns {Response<T>} The response with the successful result
 */
export function ok<T>(data: T): Response<T> {
  return { data };
}

/**
 * Create a failed response with the given error message.
 *
 * @template T The type of the successful result
 * @template Err The type of the error message (default: string)
 *
 * @param {Err} err The error message to put in the response
 *
 * @returns {Response<T, Err>} The response with the error message
 */
export function err<T, Err = string>(err: Err): Response<T, Err> {
  return { err };
}

/**
 * Check if the given response is an error response.
 *
 * @template T The type of the successful result
 * @template Err The type of the error message (default: string)
 *
 * @param {Response<T, Err>} res The response to check
 *
 * @returns {boolean} True if the response is an error response, false otherwise
 */
export function checkErr<T, Err = string>(res: Response<T, Err>): boolean {
  return "err" in res;
}
