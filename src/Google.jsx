import React, { useEffect, useState } from 'react';
import { auth, googleProvider } from './config/firebase';
import { signInWithRedirect } from 'firebase/auth';
import flower from './assets/flower.png';
import google from "./assets/google.png";
import money from "./assets/money.png";
import { useGlobal } from './context';
function Google() {
  const [msg, setMsg] = useState('Sign In');
  const {img,setImg,name,setName,signIn,view,setView,setSignIn} = useGlobal();
  // useEffect(() =>{
  //   setName(auth?.currentUser.displayName);
  //   setImg(auth?.currentUser.photoURL);
  // },[])
  const toggleMsgAndSignIn = async () => {
    try {      
        setMsg('Signing In...');
        await signInWithRedirect(auth, googleProvider);
        var user = auth?.currentUser != null ? auth?.currentUser?.displayName : 'user101';         
        setName(user);
        setView(true);
        setSignIn(false)  
        console.log(signIn,view);            
    } catch (err) {
      console.error(err);
      setMsg('Sign In'); // Reset the message on error
    }
  };

  return (
    <div className='flex w-[100%] py-20  flex-col items-center justify-center '>
       <div className=' sm:none flex items-center justify-center w-[100%]'>
        <img className='h-[400px] w-[300px] rounded-[40px] ' src={flower} alt="" />
        </div>   

      <div>
        <button onClick={toggleMsgAndSignIn} className="px-3 flex items-center justify-center  py-3 bg-purple-600 text-white mx-4 mt-12 rounded-[6px]">
        {auth?.currentUser !== null ? 'Sign In with Google' : 'Signing In...'}
        <img className='h-[30px] ml-3 w-[30px] ' src={google} alt="" />
      </button>
      </div>

      {/* <h1>{auth?.currentUser?.displayName}</h1>
      <img className="h-[40px] w-[40px] rounded-[50%]" src={auth?.currentUser?.photoURL} /> */}
    </div>
  );
}

export default Google;
