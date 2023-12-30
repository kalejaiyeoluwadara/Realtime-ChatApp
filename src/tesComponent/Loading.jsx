import React from 'react';
import { useGlobal } from '../context';
const Loading = () => {
  const {isLight} = useGlobal();
  return (
    <div className={`flex ${isLight?'bg-white':'bg-gray-900'}  absolute top-0 items-center h-screen w-screen justify-center mt-10`}>
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default Loading;