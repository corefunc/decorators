/**
 * @name measureExecution
 * @namespace method
 * @param {string} label Measure method execution using `console.time()`
 * @returns {Function}
 * @example
 * ```javascript
 * class Class {
 *   @measureExecution("long execution time")
 *   hardTask() {
 *     let result = 0;
 *     for (let index = 0; index < 1_000_000_000; index++) {
 *       result += index;
 *     }
 *     return result;
 *   }
 * }
 * new Class().hardTask();
 * ```
 * @since 0.0.2
 */
export function measureExecution(label) {
  return function (_target, _key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args) {
      console.time(label);
      const value = await originalMethod.apply(this, args);
      console.timeEnd(label);
      return value;
    };
    return descriptor;
  };
}
