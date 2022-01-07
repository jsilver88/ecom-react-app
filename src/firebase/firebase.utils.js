import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDL8BAB4iETIhGczTJMCpdSvfY0rX-1PxY',
  authDomain: 'crown-clothing-a0e24.firebaseapp.com',
  projectId: 'crown-clothing-a0e24',
  storageBucket: 'crown-clothing-a0e24.appspot.com',
  messagingSenderId: '571497247110',
  appId: '1:571497247110:web:a4e5aeec954f6ad0e43c07',
  measurementId: 'G-LKEEG2LPS7',
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
