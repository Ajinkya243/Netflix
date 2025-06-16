import { useEffect } from "react"
import Browse from "./Browse"
import Login from "./Login"
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
const Body = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
                onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName} = user;
            dispatch(addUser({uid,email,displayName}))
          } else {
            dispatch(removeUser());
          }
        });
    },[])
     return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/browse" element={<Browse/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Body