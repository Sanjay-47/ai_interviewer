import {cert, getApps} from 'firebase-admin/app';
import {getAuth} from "firebase-admin/auth";
import {firestore} from "firebase-admin";
import {initializeApp} from "firebase-admin/app";

const initFirebaseAdmin = () => {
    const apps=getApps();

    if(!apps.length){
        initializeApp({
            credential:cert({
                projectId:process.env.FIREBASE_PROJECT_ID,
                clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
                privateKey:process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,"\n")
            })
        })
    }
    return {
        auth:getAuth(),
        db:firestore()
    }
}
export const {auth,db}=initFirebaseAdmin();
