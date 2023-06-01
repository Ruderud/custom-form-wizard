import Image from 'next/image';
import { ScrollSnapFormSlider } from '../../../component/client/ScrollSnapFormSlider';
import Link from 'next/link';

export const runtime = 'edge';

export default function UserInfo() {
  return (
    <main className="p-10">
      <Link href="/">Back to Main</Link>
      <div className="text-lg color:red">Basic User Info</div>
      <Image src="/icons/check.svg" alt="Check" className="dark:invert" width={24} height={24} priority />

      <ScrollSnapFormSlider />
    </main>
  );
}
