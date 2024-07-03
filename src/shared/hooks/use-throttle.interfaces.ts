export type AnyFunction = (...args: any[]) => any;

export type UseThrottle = <T extends AnyFunction>(
  func: T,
  limit: number
) => (...args: Parameters<T>) => ReturnType<T> | undefined;