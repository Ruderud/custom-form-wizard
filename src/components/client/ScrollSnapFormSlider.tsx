'use client';

import { useState } from 'react';

export const ScrollSnapFormSlider = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  return (
    <ul className="snap-mandatory snap-x w-full h-[calc(100vh-8rem)] overflow-hidden">
      <li
        id="1"
        className="snap-start h-[calc(100vh-8rem)]"
        onClick={() => {
          setSliderIndex(1);
        }}
      >
        <div className="text-lg color:red">Basic User Info</div>
        1번
        <button
          onClick={() => {
            location.hash = '4';
          }}
        >
          Next
        </button>
      </li>
      <li
        id="4"
        className="snap-start h-[calc(100vh-8rem)]"
        onClick={() => {
          setSliderIndex(4);
        }}
      >
        4번
      </li>
      <li
        id="3"
        className="snap-start h-[calc(100vh-8rem)]"
        onClick={() => {
          setSliderIndex(2);
        }}
      >
        3번
      </li>
      <li
        id="2"
        className="snap-start h-[calc(100vh-8rem)]"
        onClick={() => {
          setSliderIndex(3);
        }}
      >
        2번
      </li>
    </ul>
  );
};
