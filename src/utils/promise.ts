export const resolve = <T>(result: T) => new Promise((resolve) => resolve(result));

export const reject = <T>(error: T) => new Promise((resolve, reject) => reject(error));
