import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBeGfOkiTnxwbq5pLShaia0fE8NRJyLhNs",
    authDomain: "vuefb-1944b.firebaseapp.com",
    databaseURL: "https://vuefb-1944b.firebaseio.com",
    projectId: "vuefb-1944b",
    storageBucket: "vuefb-1944b.appspot.com",
    messagingSenderId: "650378348422"
};
firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}