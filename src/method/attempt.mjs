/**
 * @name attempt
 * @namespace method
 * @param {Function} handlerFunction Function to handle error, accepts one argument - actual error
 * @returns {Function}
 * @example
 * ```javascript
 * class Kitty {
 *   @attempt((error: Error, args: any[]) => {
 *     console.warn("Exception thrown!");
 *     console.log(error.message); // "uwu"
 *     console.dir(args); // [ 10, false ]
 *   })
 *   meow(volume: number, cute = true) {
 *     throw new Error("uwu");
 *   }
 * }
 * new Kitty().meow(10, false);
 * ```
 * @since 0.0.1
 */
export function attempt(handlerFunction) {
  return function attemptDecorator(_target, _key, descriptor) {
    const originalMethod = descriptor.value;
    if (Object.prototype.toString.call(originalMethod) === "[object AsyncFunction]") {
      descriptor.value = async function (...args) {
        try {
          const value = await originalMethod.apply(this, args);
          if (value !== undefined && value.catch) {
            value.catch((error) => handlerFunction(error, args));
          }
          return value;
        } catch (error) {
          handlerFunction(error, args);
        }
      };
    } else {
      descriptor.value = function (...args) {
        try {
          return originalMethod.apply(this, args);
        } catch (error) {
          handlerFunction(error, args);
        }
      };
    }
  };
}
