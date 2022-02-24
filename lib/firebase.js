import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAdjNxAruTCvQ_3bByphlWmqzcC5QO1aDw",
	authDomain: "next-firebase-7595a.firebaseapp.com",
	projectId: "next-firebase-7595a",
	storageBucket: "next-firebase-7595a.appspot.com",
	messagingSenderId: "285492135333",
	appId: "1:285492135333:web:056eef2f80a459b59d544c",
	measurementId: "G-P6304249ET",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export async function getUserWithUsername(username) {
	const usersRef = firestore.collection("users");
	const query = usersRef.where("username", "==", username).limit(1);
	const userDoc = (await query.get()).docs[0];
	return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
	const data = doc.data();
	return {
		...data,
		// Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
		createdAt: data.createdAt.toMillis(),
		updatedAt: data.updatedAt.toMillis(),
	};
}
