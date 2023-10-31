import React,{useState} from 'react'
import {auth,googleProvider} from './config/firebase';
import {signInWithRedirect,signInWithPopup} from 'firebase/auth'
function Google() {
  const [msg,setMsg] = useState("Sign In")
  console.log(auth?.currentUser);
  const SignInWithGoogle = async () =>{
      try{
        await signInWithRedirect(auth,googleProvider)

      }
      catch(e){
        console.error(err);
      }
  }
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick = {SignInWithGoogle} className='px-3 py-3 bg-blue-600 text-white mx-4 my-6 rounded-[6px] ' >{msg}</button>

      <h1>{auth?.currentUser?.displayName}</h1>
      <img className="h-[40px] w-[40px] rounded-[50%] " src={auth?.currentUser?.photoURL} />
    </div>
  )
}

export default Google
