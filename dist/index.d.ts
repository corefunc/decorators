/**
 * @name attempt
 * @namespace method
 * @param {Function} handlerFunction Function to handle error, accepts one argument - actual error
 * @example
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
 */
export function attempt(handlerFunction: Function): Function;
