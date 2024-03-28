export type Response<T, Err = string> = { data: T } | { err: Err };

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

export function ok<T>(data: T): Response<T> {
  return { data };
}

export function err<T, Err = string>(err: Err): Response<T, Err> {
  return { err };
}

export function checkErr<T, Err = string>(res: Response<T, Err>): boolean {
  return "err" in res;
}
