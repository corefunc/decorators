"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.attempt=function attempt(t){return function(e,c,n){const o=n.value;n.value=function(...e){try{const c=o.apply(this,e);return void 0!==c&&c.catch&&c.catch(c=>t(c,e)),c}catch(c){t(c,e)}}}};
//# sourceMappingURL=index.cjs.map
