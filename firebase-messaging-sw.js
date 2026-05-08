importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

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
  const notificationTitle = payload.data?.title || '📞 ভয়েস কল আসছে';
  const notificationOptions = {
    body: payload.data?.body || 'মমিন কল অ্যাপে রিসিভ করুন',
    icon: 'https://via.placeholder.com/192x192?text=Momin',
    vibrate: [300, 100, 300],
    sound: 'default'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
