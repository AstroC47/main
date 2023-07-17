import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, getDocs, getDoc, setDoc, where, query } from "firebase/firestore"; 
import { getStorage, ref, getDownloadURL, listAll  } from "firebase/storage";
require('dotenv').config()



const firebaseConfig = {

    apiKey: process.env.REACT_APP_APIKEY,
  
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
  
    projectId: process.env.REACT_APP_PROJECTID,
  
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  
    messagingSenderId: process.env.REACT_APP_MSGSENDERID,
  
    appId: process.env.REACT_APP_APPID,
  
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

  const countNft =async (type, projectName) => {const app = initializeApp(firebaseConfig);

    let mainFolder = ''

    if (type == 'project') {
      mainFolder = 'Projects/'
    } else if (type == 'preview') {
      mainFolder = 'preview'
    } else if (type == 'banner'){
      mainFolder = 'banner'
    } else if (type == 'mainBanner') {
      mainFolder = 'mainBanner'
    }

    const storage = getStorage(app);
    const listRef = ref(storage, mainFolder+projectName);

    const list = await listAll(listRef)

    return list.items.length
  }

  // const listImageUrls = async (projectName,nftCount) => {

  //   const app = initializeApp(firebaseConfig);
  //   const storage = getStorage(app);
  //   const listRef = ref(storage, 'Projects/'+projectName);
  //   let imgList = []

  //   const list = await listAll(listRef)

  //   for (let i = 1; i <= nftCount; i++) {
  //     const imgLink = await getImgUrl('Projects/'+projectName+'/'+i+'.webp')
  //     imgList.push({id:i, name:projectName, imageLink:imgLink})
  //   }
  //   return imgList

  // }

  const getImgUrl = async (imgSource) => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    
    let imgUrl 

    const getUrl = getDownloadURL(ref(storage, imgSource))
    
    try {
      imgUrl = await getUrl;
    } catch (error){
      console.log(error)
    }

    return imgUrl
  }

  export {readDoc, initializeFireDB, searchAll, getImgUrl, countNft};