// firebase_config.js
const firebaseConfig = {
    apiKey: "선생님의_API_KEY",
    authDomain: "선생님의_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://선생님의_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "선생님의_PROJECT_ID",
    storageBucket: "선생님의_PROJECT_ID.appspot.com",
    messagingSenderId: "선생님의_SENDER_ID",
    appId: "선생님의_APP_ID"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
