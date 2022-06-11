// import { initializeApp } from "firebase/app";

// // firebase configuration
// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
// });

// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWfvu_P1G1PnbDfAR0wNwz2GmtbdIc1Cs",
  authDomain: "react-quiz-dev-de9c4.firebaseapp.com",
  projectId: "react-quiz-dev-de9c4",
  storageBucket: "react-quiz-dev-de9c4.appspot.com",
  messagingSenderId: "796134993681",
  appId: "1:796134993681:web:1ba1ef5799e5a357f9a6b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);