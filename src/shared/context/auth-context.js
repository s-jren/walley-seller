import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn:false, 
    userId:null,
    walletAddr:null,
    token:null,
    login:()=>{}, 
    logout:()=>{}
});