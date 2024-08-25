import { useState } from "react";
import { auth } from "../../config/firebase";


export const Auth = () => {
    
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const singin = async () =>{
        await createUserWithEmailAndPassword(auth,email,password);
    };
    const sigingoogle = async () =>{
        await signInWithPopup(auth,providerGoogle   );
    };
    return(

        <div>
            <input placeholder="Email..."
            onChange={(e)=> setEmail(e.target.value)}/>
            
            <input placeholder="Password..."
            type="password"
            onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={singin} > Sign in</button> 
            <button onClick={sigingoogle}>Sign in with Google</button>
        </div>
    );
};