'use client';

import { useState } from 'react';

export const ScrollSnapFormSlider = () => {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  return (
    <div>
      <div>지금클릭된 버튼{sliderIndex}</div>
      <ul>
        <li
          className="h-80"
          id="1"
          onClick={() => {
            setSliderIndex(1);
          }}
        >
          1번
        </li>
        <li
          className="h-80"
          id="4"
          onClick={() => {
            setSliderIndex(4);
          }}
        >
          4번
        </li>
        <li
          id="3"
          className="h-80"
          onClick={() => {
            setSliderIndex(2);
          }}
        >
          3번
        </li>
        <li
          id="2"
          className="h-80"
          onClick={() => {
            setSliderIndex(3);
          }}
        >
          2번
        </li>
      </ul>
    </div>
  );
};
