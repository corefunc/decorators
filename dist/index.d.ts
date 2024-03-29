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
 * @name consoleGroup
 * @namespace method
 * @param {string} label Decorates method with inline group in the Web Console log.
 * @returns {Function}
 * @example
 * ```javascript
 * class Class {
 *   @consoleGroup("GROUP ASYNC")
 *   async asyncRun() {
 *     console.log("I'm async");
 *   }
 *   @consoleGroup("GROUP SYNC")
 *   syncRun() {
 *     console.log("I'm sync");
 *   }
 * }
 * const test = new Class();
 * test.syncRun();
 * await test.asyncRun();
 * @since 0.0.3
 */
export function consoleGroup(label: string): Function;

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

/**
 * @name Instance
 * @namespace property
 * @param {Function} constructor Class constructor.
 * @param {boolean=} [silent=true] Suppress error.
 * @returns {PropertyDecorator}
 * @example
 * ```javascript
 * class ClassAlpha {
 *   name;
 * }
 * class ClassBeta {
 *   @Instance(ClassAlpha)
 *   alpha;
 *   constructor(alpha) {
 *    this.alpha = alpha;
 *   }
 * }
 * const beta = new ClassBeta({ name: 'ALPHA' });
 * beta.alpha; // ClassAlpha
 * ```
 * @since 0.0.4
 */
export function Instance(constructor: new (...args: any[]) => any, silent?: boolean): PropertyDecorator;

/**
 * @name Instance
 * @namespace property
 * @param {Function} constructor Class constructor.
 * @param {boolean=} [silent=true] Suppress error.
 * @returns {PropertyDecorator}
 * @example
 * ```javascript
 * class ClassAlpha {
 *   name;
 * }
 * class ClassBeta {
 *   @Instance(ClassAlpha)
 *   alpha;
 *   constructor(alpha) {
 *    this.alpha = alpha;
 *   }
 * }
 * const beta = new ClassBeta({ name: 'ALPHA' });
 * beta.alpha; // ClassAlpha
 * ```
 * @since 0.0.5
 */
export function instance(constructor: new (...args: any[]) => any, silent?: boolean): PropertyDecorator;