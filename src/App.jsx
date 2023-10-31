import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import Form from "./form";
import { db } from "./config/firebase";
import { getDocs,addDoc, deleteDoc, collection } from "firebase/firestore";
import Google from "./Google";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");


  const [newMovie, setNewMovie] = useState("");
  const [newRelease, setNewRelease] = useState(0);
  const [receivedOscar, setReceivedOscar] = useState(false);
   const getMovieList = async () => {
     try {
       const data = await getDocs(moviesCollectionRef);
       const filteredData = data.docs.map((doc) => ({
         ...doc.data(),
         id: doc.id,
       }));
       setMovieList(filteredData); // Update the movieList state
       // console.log(filteredData);
     } catch (err) {
       console.error(err);
     }
   };
  useEffect(() => {
    getMovieList();
  }, []);
 const onSubmitMovie = async () =>{
   try{
     await addDoc(moviesCollectionRef,{title:newMovie,release:newRelease})
     getMovieList();
   }
   catch(err){
    console.error(err)
   }
 }
 const deleteMovie = async () => {
   const movieDoc = doc(db,"movies",id);
   await deleteDoc(movieDoc);
   getMovieList();
 };
  return (
    <>
      {/* <Form /> */}
      {/* Render the movie list */}
      {/* <div className="flex flex-col gap-4 py-20 items-center justify-center ">
        <input
          placeholder="movie title"
          type="text"
          onChange={(e) => {
            setNewMovie(e.target.value);
          }}
        />
        <input
          placeholder="Release date"
          type="number"
          onChange={(e) => {
            setNewRelease(Number(e.target.value));
          }}
        />
        <input
          type="checkbox"
          checked={receivedOscar}
          onChange={(e) => {
            setReceivedOscar(e.target.checked);
          }}
        />
        <label>Received an oscar</label>
        <button
          className="bg-blue-600 w-[90px] h-[40px] rounded-[7px] text-white "
          onClick={onSubmitMovie}
        >
          submit
        </button>
      </div>

      <ul className="flex flex-col gap-4 py-20 items-center justify-center ">
        {movieList.map((movie) => (
          <div className="text-center" key={movie.id}>
            <li>{movie.title}</li>
            <li>{movie.release}</li>
            <button onClick={() =>{deleteMovie(movie.id)}} className="bg-blue-600 w-[90px] h-[40px] rounded-[7px] text-white ">delete</button>
          </div>
        ))}
      </ul> */}

      <Google/>
    </>
  );
};

export default App;
