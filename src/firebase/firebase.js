import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBxfc3KRJZpsGueZ6I_rL6glouozjhbkS0",
    authDomain: "linkedin-project-2e2a1.firebaseapp.com",
    projectId: "linkedin-project-2e2a1",
    storageBucket: "linkedin-project-2e2a1.appspot.com",
    messagingSenderId: "366707873479",
    appId: "1:366707873479:web:82d38be897094f314f90e2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }