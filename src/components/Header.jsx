import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
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
                onAuthStateChanged(auth, (user) => {
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
    },[])
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
        <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo" />
        {user?.email&&<div className="flex">
            <img src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt="usericon" />
            <button className="font-bold text-white" onClick={handleSignOut}>{user.displayName}(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header