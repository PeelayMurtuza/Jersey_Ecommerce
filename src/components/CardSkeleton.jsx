import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg bg-white animate-pulse"
          >
            <div
              className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 rounded-t-lg"
              style={{ aspectRatio: '300/200' }}
            ></div>
            <div className="p-4 sm:p-6">
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSkeleton;
