"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Instance=function Instance(t,e=!0){return(n,o)=>{if(n[o]instanceof t)return;let c=n[o];Reflect.deleteProperty(n,o),Reflect.defineProperty(n,o,{configurable:!0,enumerable:!0,get:()=>c,set:n=>{if(e)try{c=new t(n)}catch{}else c=new t(n)}})}},exports.attempt=function attempt(t){return function attemptDecorator(e,n,o){const c=o.value;"[object AsyncFunction]"===Object.prototype.toString.call(c)?o.value=async function(...e){try{const n=await c.apply(this,e);return void 0!==n&&n.catch&&n.catch(n=>t(n,e)),n}catch(n){t(n,e)}}:o.value=function(...e){try{return c.apply(this,e)}catch(n){t(n,e)}}}},exports.consoleGroup=function consoleGroup(t){return function consoleGroupDecorator(e,n,o){const c=o.value;return"[object AsyncFunction]"===Object.prototype.toString.call(c)?o.value=async function(...e){console.group(t);try{const t=await c.apply(this,e);return console.groupEnd(),t}catch(t){throw console.groupEnd(),t}}:o.value=function(...e){console.group(t);try{const t=c.apply(this,e);return console.groupEnd(),t}catch(t){console.groupEnd()}},o}},exports.measureExecution=function measureExecution(t){return function measureExecutionDecorator(e,n,o){const c=o.value;return"[object AsyncFunction]"===Object.prototype.toString.call(c)?o.value=async function(...e){console.time(t);try{const n=await c.apply(this,e);return console.timeEnd(t),n}catch(e){throw console.timeEnd(t),e}}:o.value=function(...e){console.time(t);try{const n=c.apply(this,e);return console.timeEnd(t),n}catch(e){throw console.timeEnd(t),e}},o}};
//# sourceMappingURL=index.cjs.map
