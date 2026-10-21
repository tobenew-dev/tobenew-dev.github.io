const V='shiftplan-45207d32';
const FILES=["./", "index.html", "manifest.webmanifest", "banner.webp", "banner_dark.webp", "icons/icon-192.png", "icons/icon-512.png", "fonts/blackhansans.woff", "fonts/plexkr-400.woff", "fonts/plexkr-500.woff", "fonts/plexkr-600.woff", "fonts/plexkr-700.woff", "fonts/plexmono-500.woff", "fonts/plexmono-600.woff"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));
});
