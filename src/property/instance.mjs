/**
 * @name Instance
 * @namespace property
 * @param {Function} constructor Class constructor.
 * @param {boolean=} [silent=true] Suppress error.
 * @returns {Function}
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
export function Instance(constructor, silent = true) {
  return (target, key) => {
    if (target[key] instanceof constructor) {
      return;
    }
    let original = target[key];
    Reflect.deleteProperty(target, key);
    Reflect.defineProperty(target, key, {
      configurable: true,
      enumerable: true,
      get: () => original,
      set: (properties) => {
        if (silent) {
          try {
            original = new constructor(properties);
          } catch {
            //
          }
        } else {
          original = new constructor(properties);
        }
      },
    });
  };
}

/**
 * @name Instance
 * @namespace property
 * @param {Function} constructor Class constructor.
 * @param {boolean=} [silent=true] Suppress error.
 * @returns {Function}
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
export function instance(constructor, silent = true) {
  return Instance(constructor, silent);
}