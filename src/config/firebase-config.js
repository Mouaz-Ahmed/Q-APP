import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, signInWithPopup, getAuth,onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBB1IE5guOZj46kMkVN9Hl6Cb2AZOR9E-M",
    authDomain: "q-app-c0696.firebaseapp.com",
    projectId: "q-app-c0696",
    storageBucket: "q-app-c0696.appspot.com",
    messagingSenderId: "565027247458",
    appId: "1:565027247458:web:b3a804410d963aa703083b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const fbSignInFirebase = async () => {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider)
    await addUserInfoToDB(result.user)
}
// add user data to firestore when logIn

const addUserInfoToDB = async (user) => {
    const { uid, displayName, email } = user
    try {
        await setDoc(doc(db, "users", uid), {
            displayName, email, uid
        });
        console.log("infromtaion store in db" + displayName)
    } catch (e) {
        console.log("error ==>" + e.message)
    }
}

// check uuser logIn or not 
// const checkUserLogin = ()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/firebase.User
//           const uid = user.uid;
//           // ...
//         } else {
//           // User is signed out
//           // ...
//         }
//       });
// }


export { fbSignInFirebase};