import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

    apiKey: 'AIzaSyDnJBM4dDsAl1tDuRfAOy4ozX76E89Atk4',

    authDomain: 'portafolioluisdev.firebaseapp.com',

    projectId: 'portafolioluisdev',

    storageBucket: 'portafolioluisdev.appspot.com',

    messagingSenderId: '6395715592',

    appId: '1:6395715592:web:ebd7ebbd703ba28f7231bd',

    measurementId: 'G-D1842Q4JH9'

};
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)