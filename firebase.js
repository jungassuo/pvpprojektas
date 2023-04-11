// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdaI9e629Jl6eyQC4zbofYjpvVkBXF_oo",
    authDomain: "cleanngo-app.firebaseapp.com",
    projectId: "cleanngo-app",
    storageBucket: "cleanngo-app.appspot.com",
    messagingSenderId: "675105109279",
    appId: "1:675105109279:web:50672e93ce4a6f07fcec2a",
    measurementId: "G-3B6XWL546G"
};


// let app;
// if(firebase.apps.length === 0){
//     const app = initializeApp(firebaseConfig);
// }else{
//     app = firebase.app();
// }

// const auth = firebase.auth()

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}