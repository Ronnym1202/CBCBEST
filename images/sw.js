// ============================================
// CBC BEST WEBSITE - SERVICE WORKER
// Created by Ronny Mwenda (Ronny Best)
// Purpose: Offline capability, faster loading, PWA functionality
// Version: 1.0.0
// ============================================

// Service Worker Version - Update this when you make changes to force refresh
const CACHE_VERSION = 'cbc-best-v1-2026-06-02';
const CACHE_NAME = CACHE_VERSION;

// ============================================
// FILES TO CACHE FOR OFFLINE ACCESS
// ============================================
const urlsToCache = [
  '/',
  '/index.html',
  '/pathways.html',
  '/subjects-skills.html',
  '/teacher-requirements.html',
  '/mathematics-computer-science.html',
  '/forums.html',
  '/resources.html',
  '/faq.html',
  '/blog.html',
  '/about-contact.html',
  '/404.html',
  '/manifest.json',
  '/offline.html'  // Custom offline page (created below)
];

// ============================================
// INSTALL EVENT - Cache all core files
// ============================================
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching core files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] Installation complete');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('[Service Worker] Cache failed:', error);
      })
  );
});

// ============================================
// ACTIVATE EVENT - Clean up old caches
// ============================================
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Activated, ready to handle fetches');
      return self.clients.claim();
    })
  );
});

// ============================================
// FETCH EVENT - Serve from cache, fallback to network
// Strategy: Cache First, then Network
// ============================================
self.addEventListener('fetch', event => {
  // Skip non-GET requests and analytics/tracking scripts
  if (event.request.method !== 'GET') return;
  
  // Skip cross-origin requests (like external APIs)
  if (!event.request.url.startsWith(self.location.origin)) return;
  
  // Skip Chrome extension requests
  if (event.request.url.includes('chrome-extension')) return;
  
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        console.log('[Service Worker] Fetching from network:', event.request.url);
        return fetch(event.request)
          .then(networkResponse => {
            // Don't cache non-successful responses
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            
            // Cache the new response for future use
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return networkResponse;
          })
          .catch(error => {
            console.error('[Service Worker] Fetch failed:', error);
            
            // If both cache and network fail, show offline page
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
            
            // For images, return a placeholder
            if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
              return caches.match('/images/placeholder.png');
            }
            
            // For everything else, return a simple error response
            return new Response('You are offline. Please check your internet connection.', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// ============================================
// BACKGROUND SYNC (Optional) - For forms offline
// ============================================
// This allows users to submit contact forms while offline
// The form data will be sent when connection is restored

self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    console.log('[Service Worker] Syncing contact forms...');
    event.waitUntil(syncContactForms());
  }
});

async function syncContactForms() {
  // Retrieve stored form submissions from IndexedDB or localStorage
  // This requires additional setup - optional feature
  console.log('[Service Worker] Background sync complete');
}

// ============================================
// PUSH NOTIFICATIONS (Optional) - For CBC updates
// ============================================
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'CBC Best Update';
  const options = {
    body: data.body || 'New CBC resources and updates available!',
    icon: '/images/icon-192.png',
    badge: '/images/icon-96.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  const urlToOpen = event.notification.data.url;
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (let client of windowClients) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        // If not, open a new window/tab
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
  );
});

// ============================================
// MESSAGE HANDLER - For communication with main page
// ============================================
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ============================================
// HELPER: Generate offline page if not exists
// Note: Create offline.html file separately
// ============================================
console.log('[Service Worker] Version', CACHE_VERSION, 'loaded successfully');