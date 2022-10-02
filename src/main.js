import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeITAdiBLM1avkhiE57bJDh01bsWB_9hQ",
  authDomain: "web-dev---1.firebaseapp.com",
  projectId: "web-dev---1",
  storageBucket: "web-dev---1.appspot.com",
  messagingSenderId: "842189052831",
  appId: "1:842189052831:web:4ec17be4922d528009fbaa",
  measurementId: "G-JYB148N28C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createApp(App).use(router).mount('#app')
