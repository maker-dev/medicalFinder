import React from 'react';

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-70 z-50">
      <div className="loader border-t-8 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin">
      </div>
    </div>
  );
}

export default Loader;