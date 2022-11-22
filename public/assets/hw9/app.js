import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp, orderBy } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    // YOUR CONFIG HERE //
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

signInBtn.onclick = () => signInWithPopup(auth, provider);

signOutBtn.onclick = () => {
    signOut(auth, provider);
    location.reload()
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});

///// Firestore /////

const db = getFirestore(app);

const createEntry = document.getElementById('createEntry');
const entryList = document.getElementById('entryList');
const entryText = document.getElementById('entryText');


let entryRef = collection(db, "entries")

let findEntries  = async (user) => {
    const q = query(entryRef, where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);

    // Code for Testing: This prints all the documents/entries you found and their IDs in the console (Browser Developer Tools)
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });


    const items = querySnapshot.docs.map(doc => {
        return `<li>${doc.data().timestamp.toDate().toDateString()}: ${doc.data().entry}</li>`
    });

    entryList.innerHTML = items.join('');
}

onAuthStateChanged(auth, (user) => {
    if (user) {

        findEntries(user)

        createEntry.onclick = async () => {
            let timestamp = Timestamp.now()
            console.log(timestamp)
            const newEntryRef = await addDoc(entryRef, {
                uid: user.uid,
                entry: entryText.value,
                timestamp: timestamp
            });

            entryText.value = ""
            console.log("Document written at", newEntryRef.timestamp);
            findEntries(user)
        }
    } 
});