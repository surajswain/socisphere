import {createContext,useState,useEffect} from 'react';

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
       
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem('user'))|| null);

const login=()=>{
    //Later
    setCurrentUser({id:1,name:"John Cena",profilePic:"https://images.pexels.com/photos/163431/fist-blow-power-wrestling-163431.jpeg?auto=compress&cs=tinysrgb&w=600"});
}
       useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))

      },[currentUser])



      return (<AuthContext.Provider value={{currentUser,login}}>{children}</AuthContext.Provider>)
}

