import { useMemo, useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";


const Login = () => {
    const[isSignIn,setIsSignIn]=useState(true);
    const[errorMessage,setErrorMessage]=useState("");
    const user=useMemo(()=>({
        email:"ajinkya@gmail.com",
        password:"ajinkya007"
    }),[])
    const dispatch=useDispatch();
    
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }
    const handleButtonClick=(e)=>{
        e.preventDefault();
       //checkValidData(); 
       const response=checkValidData(email.current.value,password.current.value)
       setErrorMessage(response);
       if(response) return;

       if(!isSignIn){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
        displayName: name.current.value, photoURL: ""
        }).then(() => {
            const{uid,email,displayName}=auth.currentUser;
            dispatch(addUser({uid,email,displayName}))
        }).catch((error) => {
            setErrorMessage(error.message);
        });
        
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} ${errorMessage}`)
        });
       }
       else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} ${errorMessage}`)
        });
       }

    }
    const handleCredentials=(e)=>{
        e.preventDefault();
        email.current.value=user.email;
        password.current.value=user.password
    }
    
  return (
    <div>
        <Header/>
        <div className="">
            <img className="h-screen object-cover md:w-screen absolute" src={BG_URL} alt="background" />
            <form className="w-9/12 md:w-3/12 absolute bg-black bg-opacity-80 mx-auto my-36 right-0 left-0 p-5 text-white">
            <h1 className="font-bold text-3xl py-4">{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn&&<input ref={name} type="text" placeholder="Enter Name" className="p-4 my-3 w-full bg-gray-700 rounded-lg" />}
                <input ref={email}
                type="email" required placeholder="Enter Email" className="p-4 my-3 w-full bg-gray-700 rounded-lg" />
                <input ref={password} 
                type="password" required placeholder="Enter Password" className="p-4 my-3 w-full bg-gray-700 rounded-lg" />
                {errorMessage&&<p className="text-red-700 text-xl">{errorMessage}</p>}
                <button className="p-3 my-5 bg-red-600 w-full rounded-lg" 
                onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
                {isSignIn&&<button className="p-3 my-2 bg-blue-600 w-full rounded-lg" onClick={handleCredentials}>Test Credentials</button>}
                <p className="cursor-pointer" onClick={toggleSignIn}>{isSignIn?"New to Netflix? Sign Up Now":"Already registered? Sign In now"}</p>
            </form>
        </div>
        </div>
  )
}

export default Login