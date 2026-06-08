// ============================================
// CBC BEST — Service Worker (sw.js)
// Ronny Mwenda (Ronny Best) · cbcbest.netlify.app
// Strategy: Cache-first for pages, network-first for fresh content
// ============================================

const CACHE_NAME = 'cbcbest-v1';
const OFFLINE_PAGE = '/404.html';

// All pages to pre-cache on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/pathways.html',
  '/subjects-skills.html',
  '/assessment-tools.html',
  '/learning-outcomes.html',
  '/teacher-requirements.html',
  '/mathematics-computer-science.html',
  '/resources.html',
  '/forums.html',
  '/faq.html',
  '/blog.html',
  '/about-contact.html',
  '/privacy-policy.html',
  '/terms-of-use.html',
  '/404.html',
  '/manifest.json',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/icon-maskable-192.png',
  '/images/icon-maskable-512.png'
];

// ── INSTALL: pre-cache all pages ──────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: remove old caches ──────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// ── FETCH: serve requests intelligently ──────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests (forms, APIs)
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (Google Fonts, AdSense, external APIs)
  // These must always come from the network
  if (url.origin !== self.location.origin) return;

  // Skip AdSense and analytics URLs explicitly
  if (
    url.hostname.includes('google') ||
    url.hostname.includes('doubleclick') ||
    url.hostname.includes('googlesyndication') ||
    url.hostname.includes('googletagmanager') ||
    url.hostname.includes('analytics')
  ) return;

  event.respondWith(
    caches.match(request).then(cachedResponse => {

      // CACHE HIT: serve from cache, then update in background
      if (cachedResponse) {
        // For HTML pages: update cache in background (stale-while-revalidate)
        if (request.destination === 'document') {
          fetch(request)
            .then(networkResponse => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME)
                  .then(cache => cache.put(request, networkResponse));
              }
            })
            .catch(() => {}); // silently fail if offline
        }
        return cachedResponse;
      }

      // CACHE MISS: try network, cache the result
      return fetch(request)
        .then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          // Cache the new response for future offline use
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(request, responseToCache));
          return networkResponse;
        })
        .catch(() => {
          // Completely offline and not in cache
          // For page navigations, show the 404 page
          if (request.destination === 'document') {
            return caches.match(OFFLINE_PAGE);
          }
          // For other assets (images, etc.), return nothing
          return new Response('', { status: 408 });
        });
    })
  );
});