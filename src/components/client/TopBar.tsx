'use client';

import Link from 'next/link';
import { useState } from 'react';

export const TopBar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleButtonClick = () => setIsVisible(false);

  return (
    <div className={`${isVisible ? 'absolute' : 'hidden'} bg-white w-full py-2 px-8 flex justify-between`}>
      <Link className="text-black font-bold" href="/">
        Back to Main
      </Link>
      <button className="text-slate-600" onClick={handleButtonClick}>
        Hide Bar
      </button>
    </div>
  );
};
