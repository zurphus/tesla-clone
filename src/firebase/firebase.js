import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyBNLAiRPegmKnzi6YaDC12QMomkSgUPqaI",
  authDomain: "tesla-clone-ad996.firebaseapp.com",
  projectId: "tesla-clone-ad996",
  storageBucket: "tesla-clone-ad996.appspot.com",
  messagingSenderId: "1043784941809",
  appId: "1:1043784941809:web:ea1b8fd5717a18923d6950"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }