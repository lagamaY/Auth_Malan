
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYRA0nRtbjuFeXchYuij-r56hzDQkVeTY",
  authDomain: "authmalan.firebaseapp.com",
  projectId: "authmalan",
  storageBucket: "authmalan.appspot.com",
  messagingSenderId: "393043403599",
  appId: "1:393043403599:web:01867737571b3d7e8c5b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };