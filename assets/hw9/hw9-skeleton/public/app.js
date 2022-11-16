import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { getFirestore, addDoc, collection, query, where, getDocs, Timestamp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js';

//////// QUESTION 1: Configuring your Firebase Project ////////
const firebaseConfig = {
  /* YOUR CONFIG HERE */
};

const app = initializeApp(firebaseConfig);

//////// END OF QUESTION 1 ////////



// Setting up Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// When the sign-in button is clicked, the pop-up window will appear for users to sign in via Google.
signInBtn.onclick = () => signInWithPopup(auth, provider);

// When the sign-out button is clicked, the user is signed out and the page reloads.
signOutBtn.onclick = () => {
    signOut(auth, provider);
    location.reload()
}

// onAuthStateChanged detects if the user signs in or signs out. 
onAuthStateChanged(auth, (user) => {
    // user argument is null if a user signs out.
    if (user) {
        // If a user signs in:
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        //////// QUESTION 2: What happens when a user signs out? (The previous lines are a hint!) ////////

        /* YOUR CODE HERE */

        ////////
    }
});


// Setting up Firestore database
const db = getFirestore(app);

// This creates a reference to the collection of diary "entries" in your database.
let entryRef = collection(db, "entries")

const createEntry = document.getElementById('createEntry');
const entryList = document.getElementById('entryList');
const entryText = document.getElementById('entryText');

// findEntries is a function that finds all the entries written by a user!
let findEntries  = async (user) => {

    //////// QUESTION 3: Find all documents related to the query you are making below! (Hint: Check the homework spec) ////////
    const q = query(entryRef, where('uid', '==', user.uid));
    const querySnapshot = /* YOUR CODE HERE */

    // Helper Code for Testing: This prints all the documents/entries you found and their IDs in the console! (Browser Developer Tools)
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });

    const items = querySnapshot.docs.map(doc => {
        return `<li>${doc.data().timestamp.toDateString()}: ${doc.data().entry}</li>`
    });

    entryList.innerHTML = items.join('');

    //////// END OF QUESTION 3 ////////
}

onAuthStateChanged(auth, (user) => {
    if (user) {

        findEntries(user)

        createEntry.onclick = async () => {
            //////// QUESTION 4: Add an entry in the database! (Hint: Check the homework spec) ////////
            let timestamp = Timestamp.now()

            const newEntryRef = /* YOUR CODE HERE */

            console.log("Document written at", newEntryRef.timestamp);
            entryText.value = ""
            findEntries(user)

            //////// END OF QUESTION 4 ////////
        }
    } 
});