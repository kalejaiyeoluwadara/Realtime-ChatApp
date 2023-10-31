import React,{useState} from 'react'
import {auth,googleProvider} from './config/firebase'
import { createUserWithEmailAndPassword,signInWithRedirect,signInWithPopup,signOut } from 'firebase/auth';
function Form() {
    const [name,setName] = useState('');
    const [pass,setPass] = useState('');
    // console.log(auth?.currentUser?.email);
    const SignIn = async () =>{
        try{
        await createUserWithEmailAndPassword(auth,name,pass);
        }
        catch(err){
            console.error(err);
        }
    }
    const SignInWithGoogle = async () => {
      await signInWithRedirect(auth,googleProvider);
    };
    const logout = async () => {
      try{
        await signOut(auth);
      }       
        catch(err){
            console.error(err);
        }
    };
  return (
    <div className="flex h-[30vh] py-12 items-center justify-center flex-col gap-3  ">
      <input
        value={name}
        placeholder="Email..."
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="pl-4"
        type="text"
      />
      <input
        onChange={(e) => {
          setPass(e.target.value);
        }}
        value={pass}
        placeholder="password ..."
        type="password"
        className="pl-4"
      />
      <button
        onClick={SignIn}
        className="bg-blue-600 w-[90px] h-[40px] rounded-[7px] text-white "
      >
        submit
      </button>
      <button
        onClick={SignInWithGoogle}
        className="bg-blue-600 w-[90px] h-[40px] rounded-[7px] text-white "
      >
        google
      </button>
      <button
        onClick={logout}
        className="bg-blue-600 w-[90px] h-[40px] rounded-[7px] text-white "
      >
        logout
      </button>
    </div>
  );
}

export default Form
