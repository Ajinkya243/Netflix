import { useMemo, useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";

const Login = () => {
    const[isSignIn,setIsSignIn]=useState(true);
    const[errorMessage,setErrorMessage]=useState("");
    const user=useMemo(()=>({
        email:"ajinkya@test.com",
        password:"ajinkya"
    }),[])
    const email=useRef(null);
    const password=useRef(null);
    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }
    const handleButtonClick=(e)=>{
        e.preventDefault();
       //checkValidData(); 
       console.log(email,password);
       const response=checkValidData(email.current.value,password.current.value)
       setErrorMessage(response);
       console.log(response);
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
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg" alt="background" />
            <form className="w-3/12 absolute bg-black bg-opacity-80 mx-auto my-36 right-0 left-0 p-5 text-white">
            <h1 className="font-bold text-3xl py-4">{isSignIn?"Sign In":"Sign Up"}</h1>
            {!isSignIn&&<input type="text" placeholder="Enter Name" className="p-4 my-3 w-full bg-gray-700 rounded-lg" />}
                <input ref={email}
                type="email" required placeholder="Enter Email" className="p-4 my-3 w-full bg-gray-700 rounded-lg" />
                <input ref={password} 
                type="password" required placeholder="Enter Password" className="p-4 my-3 w-full bg-gray-700 rounded-lg" />
                {errorMessage&&<p className="text-red-700 text-xl">{errorMessage}</p>}
                <button className="p-3 my-5 bg-red-600 w-full rounded-lg" 
                onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
                {isSignIn&&<button className="p-3 my-2 bg-blue-600 w-full rounded-lg" onClick={handleCredentials}>Test Credebtials</button>}
                <p className="cursor-pointer" onClick={toggleSignIn}>{isSignIn?"New to Netflix? Sign Up Now":"Already registered? Sign In now"}</p>
            </form>
        </div>
        </div>
  )
}

export default Login