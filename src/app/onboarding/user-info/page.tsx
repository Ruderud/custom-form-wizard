import Image from 'next/image';
import { ScrollSnapFormSlider } from '../../../components/client/ScrollSnapFormSlider';
import { TopBar } from '@/components/client/TopBar';

export const runtime = 'edge';

export default function UserInfo() {
  return (
    <>
      <TopBar />
      <main className="p-16">
        <ScrollSnapFormSlider />
      </main>
    </>
  );
}
