import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, USER_Avatar } from "../utils/constants";
const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        navigate("/")
        }).catch((error) => {
        // An error happened.
        });
    }
    useEffect(()=>{
               const unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName} = user;
            dispatch(addUser({uid,email,displayName}))
            console.log('auth state change listener called');
            navigate("/browse")
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });
        return ()=>unsubscribe();
    },[])
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
        <img className="w-44" src={LOGO} alt="netflix logo" />
        {user?.email&&<div className="flex">
            <img src={USER_Avatar}alt="usericon" />
            <button className="font-bold text-white" onClick={handleSignOut}>{user.displayName}(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header