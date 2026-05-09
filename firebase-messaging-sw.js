importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBb37fIJwYNKFDLmg9BS_rnFE4SIFx5JYE",
  authDomain: "momincall-c3359.firebaseapp.com",
  projectId: "momincall-c3359",
  storageBucket: "momincall-c3359.firebasestorage.app",
  messagingSenderId: "480375844238",
  appId: "1:480375844238:web:4557a048d5ff9c3f7048df"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.data?.title || 'Incoming Voice Call';
  const options = {
    body: payload.data?.body || 'Someone is calling you on Momin Call',
    icon: 'https://via.placeholder.com/192x192?text=Momin',
    vibrate: [300, 100, 300],
    requireInteraction: true
  };
  self.registration.showNotification(title, options);
});
