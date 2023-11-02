// import React, { useEffect, useState } from 'react';
// import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
// import { store } from './config/firebase';

// function Storage() {
//   const [uploadImage, setUploadImage] = useState(null);
//   const [imageList, setImageList] = useState([]);
//   const imageListRef = ref(store, 'images/');

//   const upload = () => {
//     if (uploadImage == null) return;
//     const imgRef = ref(store, `images/${uploadImage.name}`);

//     uploadBytes(imgRef, uploadImage)
//       .then((snapshot) => {
//         alert('Image uploaded');

//         // Issue 1: Fix the image list update
//         getDownloadURL(snapshot.ref)
//           .then((url) => {
//             setImageList((prev) => [...prev, url]);
//           })
//           .catch((error) => {
//             console.error('Error getting download URL:', error);
//           });
//       })
//       .catch((error) => {
//         console.error('Error uploading image:', error);
//       });
//   };

//   useEffect(() => {
//     listAll(imageListRef)
//       .then((response) => {
//         const promises = response.items.map((item) => {
//           return getDownloadURL(item).catch((error) => {
//             console.error('Error getting download URL for an item:', error);
//             return null;
//           });
//         });

//         // Issue 2: Filter out null values from the results
//         Promise.all(promises)
//           .then((urls) => {
//             const filteredUrls = urls.filter((url) => url !== null);
//             setImageList(filteredUrls);
//           })
//           .catch((error) => {
//             console.error('Error loading images:', error);
//           });
//       })
//       .catch((error) => {
//         console.error('Error listing images:', error);
//       });
//   }, []);

//   return (
//     <div className="text-white py-20 w-screen">
//       <input
//         onChange={(e) => {
//           setUploadImage(e.target.files[0]);
//         }}
//         type="file"
//       />
//       <button
//         className="px-3 flex items-center justify-center py-3 bg-purple-600 text-white mx-4 mt-12 rounded-[6px]"
//         onClick={upload}
//       >
//         Upload Image
//       </button>

//       <div className="flex flex-col items-center justify-center">
//         {imageList.map((url, index) => (
//           <img
//             key={index}
//             className="w-[200px] mt-10 rounded-[9px]"
//             src={url}
//             alt={`Image ${index}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Storage;

import "./App.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "./config/firebase";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="text-white  ">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url, id) => {
        return <img key={id} src={url} />;
      })}
    </div>
  );
}

export default App;
