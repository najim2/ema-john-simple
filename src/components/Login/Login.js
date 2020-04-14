import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    const handleSignIn = () =>{
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/review';
        })
    }
    const handleSignOut = () =>{
        auth.signOut()
        .then(res => {
            window.location.pathname = '/review';
        })
    }   
    return (
        <div>
                <h2>Join the party</h2>
                {

                auth.user? <button onClick={handleSignOut}>Sign Out</button>:
                <button onClick={handleSignIn}>Sign In With Google</button>

                }
                
        </div>
    );
};

export default Login;