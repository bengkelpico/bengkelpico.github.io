importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bengkelpico.github.io",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f357c88d4e49d046d168.js",
    "revision": "4184b49698fe0190c5cd6c05eae56a1f"
  },
  {
    "url": "/_nuxt/layouts/default.cd4ce41b7cab7d66c5aa.js",
    "revision": "e782ad004f19585cce20366e11f75ba0"
  },
  {
    "url": "/_nuxt/manifest.7ac73579042b850b782f.js",
    "revision": "aa02f24049be9684ce4966cafb4a7fdb"
  },
  {
    "url": "/_nuxt/pages/index.a9af31136d06a578618f.js",
    "revision": "082077438fec372ab52b55dcc58e5d65"
  },
  {
    "url": "/_nuxt/pages/inspire.743270e0b56f308bc256.js",
    "revision": "8d366cc21effb1b5230470ff1f1a9df1"
  },
  {
    "url": "/_nuxt/vendor.d6bc18b02fed211d08e4.js",
    "revision": "cbaba2176a39c5c5ce5a63cd092a9f5a"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

