importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    workbox.loadModule('workbox-strategies');
    console.log('Workbox berhasil dimuat');
} else {
    console.log('Workbox gagal dimuat');
}

workbox.precaching.precacheAndRoute([{
        url: '/',
        revision: 1
    },
    {
        url: '/manifest.json',
        revision: 1
    },
    {
        url: '/index.html',
        revision: 1
    },
    {
        url: '/pages/detail.html',
        revision: 1
    },
    {
        url: '/pages/favorite.html',
        revision: 1
    },
    {
        url: '/pages/home.html',
        revision: 1
    },
    {
        url: '/pages/scoreboard.html',
        revision: 1
    },
    {
        url: '/nav.html',
        revision: 1
    },
]);

workbox.routing.registerRoute(
    new RegExp('/img/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'img'
    })
)

workbox.routing.registerRoute(
    new RegExp('/css/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'css'
    })
)

workbox.routing.registerRoute(
    new RegExp('/js/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'js'
    })
)

workbox.routing.registerRoute(
    /^https:\/\/api\.football-data\.org\/v2/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'api-football-data-org-v2',
    })
);

// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

//Response to Push Notification
self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    var options = {
      body: body,
      icon: 'img/icon_512x.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });