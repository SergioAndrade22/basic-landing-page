self.__precacheManifest = [
  {
    revision: null,
    url: '/img/icons/android-chrome-192x192.png'
  },
  {
    revision: null,
    url: '/img/icons/android-chrome-512x512.png'
  },
  {
    revision: null,
    url: '/img/icons/android-chrome-maskable-192x192.png'
  },
  {
    revision: null,
    url: '/img/icons/android-chrome-maskable-512x512.png'
  },
  {
    revision: null,
    url: '/img/icons/apple-touch-icon-60x60.png'
  },
  {
    revision: null,
    url: '/img/icons/apple-touch-icon-76x76.png'
  },
  {
    revision: null,
    url: '/img/icons/apple-touch-icon-120x120.png'
  },
  {
    revision: null,
    url: '/img/icons/apple-touch-icon-152x152.png'
  },
  {
    revision: null,
    url: '/img/icons/apple-touch-icon-180x180.png'
  },
  {
    revision: null,
    url: '/img/icons/apple-touch-icon.png'
  },
  {
    revision: null,
    url: '/img/icons/favicon-16x16.png'
  },
  {
    revision: null,
    url: '/img/icons/favicon-32x32.png'
  },
  {
    revision: null,
    url: '/img/icons/msapplication-icon-144x144.png'
  },
  {
    revision: null,
    url: '/img/icons/mstile-150x150.png'
  },
  {
    revision: null,
    url: '/img/icons/safari-pinned-tab.svg'
  }
].concat(self.__precacheManifest || [])

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ],
    method: 'GET',
    cacheableResponse: {
      statuses: [0, 200]
    }
  })
)

workbox.routing.registerRoute(
  new RegExp('https://familysize-servicio-web.herokuapp.com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'familysize',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ],
    method: 'GET',
    cacheableResponse: {
      statuses: [0, 200]
    }
  })
)

workbox.routing.registerRoute(
  new RegExp('https://v6.exchangerate-api.com/v6/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'exchangeAPI',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100
      })
    ],
    method: 'GET',
    cacheableResponse: {
      statuses: [0, 200]
    }
  })
)

workbox.routing.registerRoute(
  new RegExp('https://(.*).tile.openstreetmap.org/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'leafletMap',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 100
      })
    ],
    method: 'GET',
    cacheableResponse: {
      statuses: [0, 200]
    }
  })
)
