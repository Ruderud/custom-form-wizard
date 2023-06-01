import Image from 'next/image';
import { ScrollSnapFormSlider } from '../../../components/client/ScrollSnapFormSlider';
import { TopBar } from '@/components/client/TopBar';

export const runtime = 'edge';

export default function UserInfo() {
  return (
    <>
      <TopBar />
      <main className="p-16">
        <div className="text-lg color:red">Basic User Info</div>
        <Image src="/icons/check.svg" alt="Check" className="dark:invert" width={24} height={24} priority />

        <ScrollSnapFormSlider />
      </main>
    </>
  );
}
