// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBP7XceHHnOvBfo9KlXNSF4adi-xg73WUE",
  authDomain: "xentora-14008.firebaseapp.com",
  projectId: "xentora-14008",
  storageBucket: "xentora-14008.appspot.com",
  messagingSenderId: "826247607164",
  appId: "1:826247607164:web:66dbc4e6414f63114deaf9",
  measurementId: "G-RVMEKK3KCM",
};
export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
