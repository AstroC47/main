import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDocs, getDoc, setDoc, where, query } from "firebase/firestore"; 

const firebaseConfig = {

    apiKey: "AIzaSyDge2EqOTgNqqRXVLulr_xJLa3q9ALTHPo",
  
    authDomain: "area-5f012.firebaseapp.com",
  
    projectId: "area-5f012",
  
    storageBucket: "area-5f012.appspot.com",
  
    messagingSenderId: "200420597498",
  
    appId: "1:200420597498:web:de3172d82ddde9f2a63343",
  
  };

  const initializeFireDB = () => {

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return db

  }

const readDoc = async (db, collectionName) => {

    let docs = []
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
        let newDoc = doc.data()
        newDoc.id = doc.id
        docs.push(newDoc)
        // console.log(`${doc.data().amount}`)
    });
    return docs
  };

  const searchAll = async (db, searchString, searchCols, searchNfts) => {

    const searchStrStart = searchString.slice(0,searchString.length-1)
    const searchEndLimit = searchStrStart + String.fromCharCode(searchString.charCodeAt(searchString.length-1) + 1)
    let docs = []
    let querySnapshot = null
    console.log(searchEndLimit)
    
    if (searchCols) {

        querySnapshot = await getDocs(collection(db, 'collections'), where("name", ">=", searchString), where("name", "<", searchEndLimit));
        querySnapshot.forEach((doc) => {
            let newDoc = doc.data()
            newDoc.id = doc.id
            docs.push(newDoc)
        });

      }

    if(searchNfts){

    const q = query(collection(db, "NFTs"), where("collection", ">=", searchString), where("collection", "<", searchEndLimit));
  
    querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let newDoc = doc.data()
        newDoc.id = doc.id
        docs.push(newDoc)
    });

    return docs

  }

  }

  export {readDoc, initializeFireDB, searchAll};