function attempt(t){return function(c,n,a){const e=a.value;a.value=function(...c){try{const n=e.apply(this,c);return void 0!==n&&n.catch&&n.catch(n=>t(n,c)),n}catch(n){t(n,c)}}}}export{attempt};
//# sourceMappingURL=index.mjs.map
