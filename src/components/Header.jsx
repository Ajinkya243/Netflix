import {useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useRef } from "react";
import { LOGO, SUPPORTED_LANGUAGES, USER_Avatar } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {user}=useSelector(state=>state.user);
    const{showGptSearch}=useSelector(state=>state.gpt);
    const lang=useRef();
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        navigate("/")
        }).catch((error) => {
        // An error happened.
        });
    }
    const handleGptSearch=()=>{
      dispatch(toggleGptSearch());
    }
    const handleLanguageChange=()=>{
      dispatch(changeLanguage(lang.current.value))
    }
    const handleNavigate=()=>{
      dispatch(toggleGptSearch());
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
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-full flex justify-between items-center">
        <img className="w-44 cursor-pointer" src={LOGO} alt="netflix logo" onClick={handleNavigate}/>
        {user?.email&&<div className="flex gap-2 items-center">
          {showGptSearch && <select name="" id="" className="bg-gray-900 text-white" onChange={handleLanguageChange} ref={lang}>
            {SUPPORTED_LANGUAGES.map(el=>(
              <option key={el.identifier} value={el.identifier}>{el.name}</option>
            ))}
          </select>}
          <button className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearch}>{showGptSearch?"Home" :"GPT Search"} </button>
            <img src={USER_Avatar}alt="usericon" />
            <button className="font-bold text-white" onClick={handleSignOut}>{user.displayName}(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header