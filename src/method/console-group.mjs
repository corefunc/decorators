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
export function consoleGroup(label) {
  return function consoleGroupDecorator(_target, _key, descriptor) {
    const originalMethod = descriptor.value;
    if (Object.prototype.toString.call(originalMethod) === "[object AsyncFunction]") {
      descriptor.value = async function (...args) {
        console.group(label);
        try {
          const value = await originalMethod.apply(this, args);
          console.groupEnd();
          return value;
        } catch (error) {
          console.groupEnd();
          throw error;
        }
      };
    } else {
      descriptor.value = function (...args) {
        console.group(label);
        try {
          const value = originalMethod.apply(this, args);
          console.groupEnd();
          return value;
        } catch (error) {
          console.groupEnd();
        }
      };
    }
    return descriptor;
  };
}
