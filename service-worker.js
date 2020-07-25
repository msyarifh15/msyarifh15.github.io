importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox) {
    workbox.loadModule('workbox-strategies');
    console.log('Workbox Berhasil Diload');
} else {
    console.log('Workbox Gagal Diload');
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
        url: '/push.js',
        revision: 1
    },
    {
        url: '/service-worker.js',
        revision: 1
    },
    {
        url: '/src/components/nav.html',
        revision: 1
    },
    {
        url: '/src/pages/home.html',
        revision: 1
    },
    {
        url: '/src/pages/teams.html',
        revision: 1
    },
    {
        url: '/src/pages/bookmark.html',
        revision: 1
    },
    {
        url: '/favicon.ico',
        revision: 1
    },
]);

workbox.routing.registerRoute(
    new RegExp('/assets/css/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'css'
    })
)

workbox.routing.registerRoute(
    new RegExp('/assets/js/'),
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

self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    var options = {
      body: body,
      icon: 'icon512.png',
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