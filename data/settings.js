//imports
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore/lite';

//config
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: "RN8I0o6G5QINeWFnlWuM",
}

//global
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//runing

//get
async function getData(from = ""){
    const base = collection(db, ("project1"+from) );
    const snapshot = await getDocs(base);
    const list = snapshot.docs.map( doc => doc.data() );
    return list;
}