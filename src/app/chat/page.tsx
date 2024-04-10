'use client';

import { TopBar } from '@/components/client/TopBar';
import { FormEventHandler, useRef, useState } from 'react';

export const runtime = 'edge';

export default function IndexPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const sendMessage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!inputRef.current) return;
    const inputValue = inputRef.current.value;

    console.log(inputValue);
    setMessages([...messages, inputValue]);

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <>
      <TopBar />
      <main className="flex flex-col p-10 ">
        <div className="p-10 text-2xl text-center">채팅방 테스트</div>

        <div className="w-full h-[40vh] overflow-scroll bg-white text-black">
          <ul>
            {messages.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
        <form className="flex gap-2 pt-2" onSubmit={sendMessage}>
          <input className="w-full text-black" type="text" ref={inputRef} />
          <button type="submit">send</button>
        </form>
      </main>
    </>
  );
}
