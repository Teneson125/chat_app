import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCS0EGzuUXx6aVkIyCFEHIJTL4iZF-_MGI',
  authDomain: 'chat-app-88e9a.firebaseapp.com',
  projectId: 'chat-app-88e9a',
  storageBucket: 'chat-app-88e9a.appspot.com',
  messagingSenderId: '1007792456908',
  appId: '1:1007792456908:web:c9bf5bd4cdfd7e17966e69',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
