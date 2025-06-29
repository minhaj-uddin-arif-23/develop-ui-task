'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function ErrorPage() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/error.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      {animationData && (
        <div className="w-full max-w-md">
          <Lottie animationData={animationData} loop autoplay />
        </div>
      )}
      <h2 className="text-xl mt-4 font-semibold">Oops! Page not found.</h2>
    </div>
  );
}
