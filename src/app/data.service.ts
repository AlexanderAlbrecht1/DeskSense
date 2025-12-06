import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, getDoc, doc, collection, getDocs, setDoc, addDoc } from 'firebase/firestore';

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
    const querySnapshot = await getDocs(collection(this.db, 'itemStorage'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  }

  async adNewItemtoStorage(itemInput:string, storage:string,storageDetail:string) {
    const docRef = await addDoc(collection(this.db, 'itemStorage'), {
      item: itemInput,
      storageLocation: storage,
      storageDetail: storageDetail,
    });
  }
}

