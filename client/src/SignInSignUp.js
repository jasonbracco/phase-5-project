import React, {useState} from "react"
import LoginPage from "./LoginPage"
import SignupPage from "./SignupPage"

function SignInSignUp({setUser}){

    const [loggingIn, setLoggingIn] = useState(false)
    const [signingUp, setSigningUp] = useState(false)


    function loginClick(){
        setLoggingIn(true);
        setSigningUp(false);
    }

    function signupClick(){
        setSigningUp(true);
        setLoggingIn(false);
    }

    function undoClick(){
        setLoggingIn(false);
        setSigningUp(false);
    }

    return(
            <div>
                <p>Welcome to PhotoShare</p>
                <p>Discover New Artists</p>
                <p>List Your Work</p>
                <p>Build Your Collection</p>  
                <div>
                    <button onClick={loginClick} className="login-button">Login</button> 
                </div>
                <div>
                    <button onClick={signupClick} className="signup-button">Sign Up</button>
                </div>
                {loggingIn ?
                    <div>
                        <LoginPage setUser={setUser}/>
                        <button onClick={undoClick}>Back</button>
                    </div>
                :
                null
                }
                {signingUp ? 
                    <div>
                        <SignupPage setUser={setUser}/>
                        <button onClick={undoClick} >Back</button>
                    </div>
                :
                null
                }
            </div>
    )
}

export default SignInSignUp