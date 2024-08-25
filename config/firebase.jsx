import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDoQaueGLcGcHIZ_OaL7_Kcbdfnq2u1Fv0",
  authDomain: "practise-2fc52.firebaseapp.com",
  projectId: "practise-2fc52",
  storageBucket: "practise-2fc52.appspot.com",
  messagingSenderId: "327370557222",
  appId: "1:327370557222:web:f0d17019bb26f73ff6a3e7",
  measurementId: "G-XX9MHEP4KX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const providerGoogle = new GoogleAuthProvider();

const database = getDatabase(app);

export { database };