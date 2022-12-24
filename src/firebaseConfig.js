import firebaseConfig from 'firebase';
import 'firebase/firestore';

const firebaseCon = {
    apiKey: 'AIzaSyCdKASSSQd8SqTsvSBFSi1PC21e8J3tlAk',
    authDomain: 'petsmart-a4838.firebaseapp.com',
    databaseURL: 'https://petsmart-a4838-default-rtdb.firebaseio.com',
    projectId: 'petsmart-a4838',
    storageBucket: 'petsmart-a4838.appspot.com',
    messagingSenderId: '1045232443420',
    appId: '1:1045232443420:web:eb2aafa7a6dcbaa706bfd9',
    measurementId: 'G-DJD2BX1LR0'
};

// Initialize Firebase
firebaseConfig.initializeApp(firebaseCon);

export default firebaseConfig;
