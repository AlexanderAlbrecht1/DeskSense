import { Storage } from './components/storage/storage';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  getDocs,
  setDoc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


import firebaseKeys from './license.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  firebaseConfig = {
    apiKey: firebaseKeys.apiKey,
    authDomain: firebaseKeys.authDomain,
    projectId: firebaseKeys.projectId,
    storageBucket: firebaseKeys.storageBucket,
    messagingSenderId: firebaseKeys.messagingSenderId,
    appId: firebaseKeys.appId,
    measurementId: firebaseKeys.measurementId,
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore(this.app);

  credentialsOk:boolean = false;

  async getSingleItem(itemId: string) {
    const docRef = doc(this.db, 'itemStorage', itemId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log('No such document!');
    }
  }

  async getItemOverview() {
    const itemsInStorage: any = [];
    const querySnapshot = await getDocs(collection(this.db, 'itemStorage'));

    querySnapshot.forEach((doc) => {
      itemsInStorage.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return itemsInStorage;
  }

  async adNewItemtoStorage(itemInput: string, storage: string, storageDetail: string) {
    const docRef = await addDoc(collection(this.db, 'itemStorage'), {
      item: itemInput,
      storageLocation: storage,
      storageDetail: storageDetail,
    });
  }

  async deleteItem(selectedItem: string) {
    await deleteDoc(doc(this.db, 'itemStorage', selectedItem));
  }

  register(email: string, password: string) {
    console.log(email, password);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.credentialsOk = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
