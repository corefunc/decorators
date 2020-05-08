![CoreFunc](docs/img/logo_128.png?raw=true "CoreFunc")

# CoreFunc Decorators

Decorators for modern JavaScript.

[![Buy Me A Coffee][buymeacoffee-img]][buymeacoffee-url]
[![Follow New Releases][releasly-img]][releasly-url]

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![GitHub Stars][gh-stars-img]][gh-stars-url]
[![TypeScript Typings][ts-img]][ts-url]
[![Travis CI][travis-img]][travis-url]
[![LGTM][lgtm-img]][lgtm-url]

---

> **Please Note:** This is "Work in Progress" package. The new functionality will be added very slowly.

---

*If you use this project don't forget to give a ⭐ [star](https://www.npmjs.com/package/@corefunc/decorators) ⭐ to it on GitHub!*

---

## Usage

CommonJS import.

```javascript
const { attempt } = require("@corefunc/decorators");
```

ECMAScript Module.

```javascript
import { attempt } from "@corefunc/decorators";
```

AMD, UMD, browser script tag.

```html
<script src="https://unpkg.com/@corefunc/decorators"></script>
```

CDN (unpkg [https://unpkg.com/](https://unpkg.com/))

```html
<script src="https://unpkg.com/@corefunc/decorators" type="module"></script>
```

Deno (Pika [https://pika.dev/](https://pika.dev/))

```javascript
import { attempt } from "https://cdn.pika.dev/@corefunc/decorators";
```

---

## Examples

### Method Decorators

#### Attempt

```typescript
import { attempt } from "@corefunc/decorators";
class Kitty {
  @attempt((error: Error, args: any[]) => {
    console.warn("Exception thrown!");
    console.log(error.message); // "uwu"
    console.dir(args); // [ 10, false ]
  })
  meow(volume: number, cute = true) {
    throw new Error("uwu");
  }
}

new Kitty().meow(10, false);
```

---

## See also

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[buymeacoffee-url]: https://buymeacoffee.com/r37r0m0d3l
[buymeacoffee-img]: https://img.shields.io/badge/support-buymeacoffee-1E90FF.svg?&logo=buy-me-a-coffee&label=support
[gh-stars-url]: https://github.com/corefunc/decorators
[gh-stars-img]: https://badgen.net/github/stars/corefunc/decorators?&icon=github&label=stars&color=FFCC33
[lgtm-url]: https://lgtm.com/projects/g/corefunc/decorators
[lgtm-img]: https://badgen.net/lgtm/grade/g/corefunc/decorators?&icon=lgtm&label=lgtm:js/ts&color=00C853
[npm-version-url]: https://npmjs.com/package/@corefunc/decorators
[npm-version-img]: https://badgen.net/npm/v/@corefunc/decorators?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/@corefunc/decorators
[npm-downloads-img]: https://badgen.net/npm/dt/@corefunc/decorators?&icon=terminal&label=downloads&color=009688
[releasly-url]: https://app.releasly.co/sites/corefunc/decorators?utm_source=github_badge
[releasly-img]: https://app.releasly.co/assets/badges/badge-blue-classic.svg
[travis-url]: https://travis-ci.com/github/corefunc/decorators
[travis-img]: https://badgen.net/travis/corefunc/decorators?&icon=travis&label=build
[ts-url]: https://github.com/corefunc/decorators/blob/master/dist/index.d.ts
[ts-img]: https://badgen.net/npm/types/@corefunc/decorators?&icon=typescript&label=types&color=1E90FF
