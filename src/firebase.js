// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// add secrets later

const firebaseConfig = {
  apiKey: "AIzaSyBTUwKIbnkKWVmU7YckkRGVNeg7-57-aQ0",
  authDomain: "river-cocoa-377215.firebaseapp.com",
  projectId: "river-cocoa-377215",
  storageBucket: "river-cocoa-377215.appspot.com",
  messagingSenderId: "786673155877",
  appId: "1:786673155877:web:b666e8e03aabab66b9a4cc",
  measurementId: "G-6J3TFPHYHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export default storage;