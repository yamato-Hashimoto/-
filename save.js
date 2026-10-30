'use strict';
window.SaveService = (() => {
  const C = RAMEN_CONFIG;
  const slot = i => `${C.KEY}-backup-${i}`;const LEGACY_KEYS=['yoizuki-ultimate-emoji-v24','yoizuki-ultimate-emoji-v23','yoizuki-ultimate-emoji-v22','yoizuki-ultimate-emoji-v21','yoizuki-ultimate-emoji-v20','yoizuki-ultimate-emoji-v19','yoizuki-ultimate-emoji-v18','yoizuki-ultimate-emoji-v17','yoizuki-ultimate-emoji-v16','yoizuki-ultimate-emoji-v15','yoizuki-ultimate-emoji-v14','yoizuki-ultimate-emoji-v13','yoizuki-ultimate-emoji-v12'];
  function structured(obj){return JSON.parse(JSON.stringify(obj));}
  function migrate(x={}){
    if(!x.version || x.version < C.VERSION){
      x.profiles = x.profiles || x.customerProfiles || x.regulars || {};
      x.customers = [];
      x.orders = [];
      x.research = x.research || x.researchDone || [];
      x.staffState = x.staffState || x.staffStatus || {};
      x.inventory = x.inventory || {};
      x.inventoryValue = x.inventoryValue || {};
      delete x.branches;delete x.branchCount;
      x.history = x.history || [];
      x.daily = x.daily || {};
      for(const p of Object.values(x.profiles||{})){p.tip=Math.min(1.35,Math.max(1,p.tip||1));p.returnWeight=Math.min(1,Math.max(.1,p.returnWeight||.5));}x.version = C.VERSION;
    }
    return x;
  }
  function merge(x={}){
    x=migrate(x);
    const merged={...structured(C.DEFAULT),...x,
      up:{...C.DEFAULT.up,...x.up},staff:{...x.staff},staffState:{...x.staffState},
      inventory:{...C.DEFAULT.inventory,...x.inventory},inventoryValue:{...C.DEFAULT.inventoryValue,...x.inventoryValue},
      profiles:{...x.profiles},customers:[...(x.customers||[])],orders:[...(x.orders||[])],research:[...(x.research||[])],
      daily:{...C.DEFAULT.daily,...x.daily},history:[...(x.history||[])],settings:{...C.DEFAULT.settings,...x.settings},stats:{...C.DEFAULT.stats,...x.stats},version:C.VERSION};
    return QualityGate.normalize(merged,C.DEFAULT);
  }
  function load(){
    for(const k of [C.KEY,slot(0),slot(1),slot(2),...LEGACY_KEYS]){
      try{const raw=localStorage.getItem(k);if(raw){const loaded=merge(JSON.parse(raw));YoizukiExtensions.run('afterLoad',{state:loaded,config:C,key:k});return loaded;}}catch(e){}
    }
    return merge();
  }
  function save(g){
    YoizukiExtensions.run('beforeSave',{state:g,config:C});g=QualityGate.normalize(g,C.DEFAULT);const n={...g,last:Date.now(),saved:Date.now(),version:C.VERSION};
    try{
      localStorage.setItem(slot(2),localStorage.getItem(slot(1))||'');
      localStorage.setItem(slot(1),localStorage.getItem(slot(0))||'');
      localStorage.setItem(slot(0),localStorage.getItem(C.KEY)||'');
      localStorage.setItem(C.KEY,JSON.stringify(n));
    }catch(e){console.warn('save failed',e);}
    return n;
  }
  function backup(g){
    const blob=new Blob([JSON.stringify({...g,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`yoizuki-v${C.VERSION}-night-${g.night}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function restore(file){return new Promise((ok,ng)=>{const r=new FileReader();r.onload=()=>{try{ok(merge(JSON.parse(String(r.result))))}catch(e){ng(e)}};r.onerror=ng;r.readAsText(file)})}
  function reset(){[C.KEY,slot(0),slot(1),slot(2)].forEach(k=>localStorage.removeItem(k));return merge();}
  return {load,save,backup,restore,reset,merge};
})();
