if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PWFhYQjWwAvDXGMO78Vni/_buildManifest.js",revision:"0f6a58582a38bca2e889fc36e9436351"},{url:"/_next/static/PWFhYQjWwAvDXGMO78Vni/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/238-9cdda5146a1deb3f.js",revision:"9cdda5146a1deb3f"},{url:"/_next/static/chunks/664-3a78f5659c3c6145.js",revision:"3a78f5659c3c6145"},{url:"/_next/static/chunks/744-07070eabc21aaa47.js",revision:"07070eabc21aaa47"},{url:"/_next/static/chunks/959-fc5bbeb458fb810c.js",revision:"fc5bbeb458fb810c"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-600fa11833beda85.js",revision:"600fa11833beda85"},{url:"/_next/static/chunks/pages/_app-0a9432779cf39eaf.js",revision:"0a9432779cf39eaf"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/eighth-6642b1140fb5083e.js",revision:"6642b1140fb5083e"},{url:"/_next/static/chunks/pages/fifth-4520c9e39a18699c.js",revision:"4520c9e39a18699c"},{url:"/_next/static/chunks/pages/fourth-f8a706210fcac507.js",revision:"f8a706210fcac507"},{url:"/_next/static/chunks/pages/index-5649c05de4263804.js",revision:"5649c05de4263804"},{url:"/_next/static/chunks/pages/ninth-2950b97ad18cbd2e.js",revision:"2950b97ad18cbd2e"},{url:"/_next/static/chunks/pages/second-2fae14c9635469cc.js",revision:"2fae14c9635469cc"},{url:"/_next/static/chunks/pages/seventh-10981129036e7fb0.js",revision:"10981129036e7fb0"},{url:"/_next/static/chunks/pages/sixth-271ede5b7f196000.js",revision:"271ede5b7f196000"},{url:"/_next/static/chunks/pages/tenth-6a55c8a4da48de6a.js",revision:"6a55c8a4da48de6a"},{url:"/_next/static/chunks/pages/third-9883ee8bb5cc5543.js",revision:"9883ee8bb5cc5543"},{url:"/_next/static/chunks/pages/third/indexDraft-21ba323cce59e4c9.js",revision:"21ba323cce59e4c9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",revision:"b8f8d6679aaa5f42"},{url:"/_next/static/css/280aff48ff020f1a.css",revision:"280aff48ff020f1a"},{url:"/_next/static/css/4df78f2cd73d6b26.css",revision:"4df78f2cd73d6b26"},{url:"/_next/static/css/4f964a752912170c.css",revision:"4f964a752912170c"},{url:"/_next/static/css/ff55a23cb5057876.css",revision:"ff55a23cb5057876"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/arrow-bottom-white.a270653c.svg",revision:"568118393bc872342add7190b3731422"},{url:"/_next/static/media/arrow-bottom.bb453506.svg",revision:"d76d6ed922e8156e36ed35e574ddddb1"},{url:"/_next/static/media/arrow-left.d25b8fa5.svg",revision:"8d5cb05a71497134173e8a1ddeb984d1"},{url:"/_next/static/media/arrow-right.c39c345f.svg",revision:"823d97a4261c44f2a425854c9ff78833"},{url:"/_next/static/media/arrow-up.7a506c8c.svg",revision:"0ee02743cff832653f5dac5684b8b55e"},{url:"/_next/static/media/backspace.6bdf02b7.svg",revision:"7d697476f7434dec859622dd8d431766"},{url:"/_next/static/media/bg-p-6.5737a79e.png",revision:"5737a79e"},{url:"/_next/static/media/bg-page-two.3967a15b.jpg",revision:"3967a15b"},{url:"/_next/static/media/enter.25acfa67.svg",revision:"59c6b59fd2504a6b2c657b1c12cf9289"},{url:"/_next/static/media/fourthPageIcon.ce427caa.png",revision:"1ee7cd39eb3acfaff393f45b7cf71586"},{url:"/_next/static/media/home-icon.31adee3b.svg",revision:"12de53ac6f59c3be0751f21b62aab2eb"},{url:"/_next/static/media/home-orange-icon.7ae6dfdb.svg",revision:"7059d61a3c610e4ad6c44099003f7d82"},{url:"/_next/static/media/info-icon.07dbbece.svg",revision:"4d4161abd1a978f60c3d3de8025e48e8"},{url:"/_next/static/media/keyboard-icon.61337925.svg",revision:"0fd3bcf24540041f65d1686250bf2635"},{url:"/_next/static/media/pause-icon.bbab4f8a.svg",revision:"4c040de0c1dbd7b9feb5ad53fb3ca4fb"},{url:"/_next/static/media/play-icon.0fcdb3e0.svg",revision:"649a3a211460390bcdabf5b1b1a98ff7"},{url:"/_next/static/media/pointIcon.9cae1a63.svg",revision:"f728f264332089cb9e7b113d92cda89d"},{url:"/_next/static/media/secondPageIcon.99dd21e0.png",revision:"9784384b7ade23651f3d7d9746eec1f8"},{url:"/_next/static/media/sign.3eafb2c0.svg",revision:"0afbc910d026d5ca426b4f361fc95afc"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/custom-sw.js",revision:"e71e192743c1fab96d77476a9cbb0d2a"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"d0d81bc90e0b1f80150cfec2a12b4830"},{url:"/icon-256x256.png",revision:"9024294a6102a3d8e46435970cc4c200"},{url:"/icon-384x384.png",revision:"78cdcedb4fb9bb6dc76e081814265503"},{url:"/icon-512x512.png",revision:"9a5dc1331450a1f65f4965dadf9be025"},{url:"/manifest.json",revision:"98b3c5b8fb873257e1e3757c0844e802"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/video/kennedy.mp4",revision:"b11f0fad23d7b71edb18d3bfbaec033f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
