"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.attempt=function attempt(t){return function attemptDecorator(o,n,c){const e=c.value;"[object AsyncFunction]"===Object.prototype.toString.call(e)?c.value=async function(...o){try{const n=await e.apply(this,o);return void 0!==n&&n.catch&&n.catch(n=>t(n,o)),n}catch(n){t(n,o)}}:c.value=function(...o){try{return e.apply(this,o)}catch(n){t(n,o)}}}},exports.consoleGroup=function consoleGroup(t){return function consoleGroupDecorator(o,n,c){const e=c.value;return"[object AsyncFunction]"===Object.prototype.toString.call(e)?c.value=async function(...o){console.group(t);try{const t=await e.apply(this,o);return console.groupEnd(),t}catch(t){throw console.groupEnd(),t}}:c.value=function(...o){console.group(t);try{const t=e.apply(this,o);return console.groupEnd(),t}catch(t){console.groupEnd()}},c}},exports.measureExecution=function measureExecution(t){return function measureExecutionDecorator(o,n,c){const e=c.value;return"[object AsyncFunction]"===Object.prototype.toString.call(e)?c.value=async function(...o){console.time(t);try{const n=await e.apply(this,o);return console.timeEnd(t),n}catch(o){throw console.timeEnd(t),o}}:c.value=function(...o){console.time(t);try{const n=e.apply(this,o);return console.timeEnd(t),n}catch(o){throw console.timeEnd(t),o}},c}};
//# sourceMappingURL=index.cjs.map
