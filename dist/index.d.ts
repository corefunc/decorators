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
export function attempt(handlerFunction: Function): Function;

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
export function measureExecution(label: string): Function;