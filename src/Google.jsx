import React, { useState } from 'react';
import { auth, googleProvider } from './config/firebase';
import { signInWithRedirect } from 'firebase/auth';

function Google() {
  const [msg, setMsg] = useState('Sign In');
  console.log(auth?.currentUser);

  const toggleMsgAndSignIn = async () => {
    try {
      if (msg === 'Sign In') {
        setMsg('Signing In...');
        await signInWithRedirect(auth, googleProvider);
      } else {
        setMsg('Sign In');
        // Handle sign-out logic here if needed
      }
    } catch (err) {
      console.error(err);
      setMsg('Sign In'); // Reset the message on error
    }
  };

  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={toggleMsgAndSignIn} className="px-3 py-3 bg-blue-600 text-white mx-4 my-6 rounded-[6px]">
        {auth?.currentUser !== null ? 'Sign In with Google' : 'Signing In...'}
      </button>

      <h1>{auth?.currentUser?.displayName}</h1>
      <img className="h-[40px] w-[40px] rounded-[50%]" src={auth?.currentUser?.photoURL} />
    </div>
  );
}

export default Google;
