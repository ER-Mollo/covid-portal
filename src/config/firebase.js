
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXJErsXIDfK-7LPFW9ZfGR4Qf82ArrLvs",
  authDomain: "employee-app-9036c.firebaseapp.com",
  projectId: "employee-app-9036c",
  storageBucket: "employee-app-9036c.appspot.com",
  messagingSenderId: "801076796783",
  appId: "1:801076796783:web:748b2a8564126e77b91c9a",
  measurementId: "G-B5F18MH5VW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export  {db};