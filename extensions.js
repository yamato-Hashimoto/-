'use strict';
window.YoizukiExtensions=(()=>{
  const hooks=new Map();
  function on(name,fn){if(typeof fn!=='function')throw new TypeError('extension hook must be a function');const list=hooks.get(name)||[];list.push(fn);hooks.set(name,list);return()=>hooks.set(name,(hooks.get(name)||[]).filter(x=>x!==fn))}
  function run(name,context){for(const fn of hooks.get(name)||[]){try{fn(context)}catch(e){console.error(`[Yoizuki extension:${name}]`,e)}}}
  function list(){return [...hooks.keys()].map(name=>({name,count:(hooks.get(name)||[]).length}))}
  return{on,run,list};
})();
