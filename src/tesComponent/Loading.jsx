import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default Loading;