importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Your web app's Firebase configuration from your screenshot
const firebaseConfig = {
    apiKey: "AIzaSyBb37fIJwYNKFDLmg9BS_rnFE4SIFx5JYE",
    authDomain: "momincall-c3359.firebaseapp.com",
    projectId: "momincall-c3359",
    storageBucket: "momincall-c3359.firebasestorage.app",
    messagingSenderId: "480375844238",
    appId: "1:480375844238:web:4557a048d5ff9c3f7048df"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const notificationTitle = 'Incoming Call';
    const notificationOptions = {
        body: 'Someone is calling you via Momin Call.',
        icon: 'icon.png',
        requireInteraction: true,
        vibrate: [200, 100, 200, 100, 200],
        tag: 'call-notification'
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});
