import { createContext, useEffect, useState } from "react";
import auth from "../Authintication/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";

 export const parentProvider=createContext(null)

const DataProvider = ({children}) => {

                        // authentication

const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

// setup user on state change.
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
        setUser(user)
        if(user){
            axios.post(`http://localhost:5000/jwt_token?email=${user.email}`,{},{withCredentials:true}).then(res=>console.log(res.data))
           
        }
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
},[])

// create user with email.
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    
}
// signin with email and password.
const emailSignin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
    
}
// singout

const signout=()=>{
   return signOut(auth)
}
// google handel
const googleProvider=new GoogleAuthProvider()
const googleLogin=()=>{
return signInWithPopup(auth,googleProvider)
}
// facebook login handle
const facebookAuth=new FacebookAuthProvider()
const facebookLogin=()=>{
return signInWithPopup(auth,facebookAuth)
}
// twitter login handel.
const twitterAuth=new TwitterAuthProvider()
const twitterLogin=()=>{
return signInWithPopup(auth,twitterAuth)
}







    const value={emailSignin,loading,user,createUser,signout,googleLogin,facebookLogin,twitterLogin}
    return (
        <parentProvider.Provider value={value}>
            {children}
        </parentProvider.Provider>
    );
};

export default DataProvider;