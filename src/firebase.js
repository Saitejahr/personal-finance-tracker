import { initializeApp } from 'firebase/app'

import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBvw_bbSomXIIAUZvmoQYAL4euAQVohBoA',
  authDomain: 'personal-finance-tracker-e56a2.firebaseapp.com',
  projectId: 'personal-finance-tracker-e56a2',
  storageBucket: 'personal-finance-tracker-e56a2.appspot.com',
  messagingSenderId: '926427844228',
  appId: '1:926427844228:web:9540b3ffcc686eff69fcd1',
  measurementId: 'G-M7M6Y1H4X6',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { db, auth, provider, doc, setDoc }
