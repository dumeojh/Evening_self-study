// 파일명: firebase_config.js
// Firebase 프로젝트 설정 정보 (선생님의 Firebase 콘솔에서 복사해와야 합니다)
const firebaseConfig = {
  apiKey: "선생님의_API_KEY",
  authDomain: "선생님의_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://선생님의_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "선생님의_PROJECT_ID",
  storageBucket: "선생님의_PROJECT_ID.appspot.com",
  messagingSenderId: "선생님의_SENDER_ID",
  appId: "선생님의_APP_ID"
};

// Firebase 초기화 (시동 걸기)
firebase.initializeApp(firebaseConfig);
// 실시간 데이터베이스(Realtime Database) 사용 준비
const db = firebase.database();
