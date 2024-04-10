'use client';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Form, SubmitHandler, useForm } from 'react-hook-form';

const OBSERVER_OPTION: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

type ScrollDirection = 'up' | 'down';

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  count: number;
};

type ScrollSnapFormSliderProps = {
  children?: ReactNode[];
};

export const ScrollSnapFormSlider = ({ children }: ScrollSnapFormSliderProps) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const scrollToElement = useCallback(
    (direction: ScrollDirection) => {
      if (!ulRef.current) return;
      const targetIndex = direction === 'down' ? sliderIndex + 1 : sliderIndex - 1;
      if (targetIndex < 0 || targetIndex >= ulRef.current.children.length) return;

      ulRef.current.children[targetIndex].scrollIntoView({ behavior: 'smooth' });
    },
    [sliderIndex]
  );

  const handleNextButton = () => scrollToElement('down');
  const handlePrevButton = () => scrollToElement('up');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="snap-mandatory snap-y w-full h-[calc(100vh-8rem)] overflow-scroll bg-blue-400">
      <p className="text-lg color:red">Basic User Info</p>
      <p className="snap-start h-[calc(100vh-8rem)]">
        <input className="text-black" placeholder="name" {...register('name')} />
        <button onClick={handleNextButton}>Next</button>
      </p>
      <p className="snap-start h-[calc(100vh-8rem)]">
        4번
        <button onClick={handleNextButton}>Next</button>
      </p>
      <li className="snap-start h-[calc(100vh-8rem)]">
        3번
        <button onClick={handleNextButton}>Next</button>
      </li>
      <li id="2" className="snap-start h-[calc(100vh-8rem)]">
        2번
        <button onClick={handleNextButton}>Next</button>
      </li>
    </form>
  );
};
