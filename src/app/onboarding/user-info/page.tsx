import Image from 'next/image';
import { ScrollSnapFormSlider } from './ScrollSnapFormSlider';

export const runtime = 'edge';

export default function UserInfo() {
  return (
    <main className="p-10">
      <button className="text-base">Back to Main</button>
      <div className="text-lg color:red">Basic User Info</div>
      <Image src="/icons/check.svg" alt="Check" className="dark:invert" width={24} height={24} priority />

      <ScrollSnapFormSlider />
    </main>
  );
}
