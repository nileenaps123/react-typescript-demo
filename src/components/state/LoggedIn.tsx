import {useState} from 'react'

export const LoggedIn=()=>{
    const [IsLoggedIn,setIsLoggedIn]=useState(false);
    //const [loggedOut,setIsLoggedOut]=useState(false);
    const handleLogin=()=>{
        setIsLoggedIn(true);
    };
    const handleLogout=()=>{
        setIsLoggedIn(false);
    };
    return(
        <div>
            <button onClick={handleLogin}></button>
            <button onClick={handleLogout}></button>
            <div>User is {IsLoggedIn?"LoggedIn":"LoggedOut"}</div>
        </div>
    )
}