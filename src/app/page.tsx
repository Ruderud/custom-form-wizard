import Link from 'next/link';

export const runtime = 'edge';

export default function Home() {
  return (
    <main>
      <div className="flex justify-center p-10 text-4xl">Form Wizard Samples</div>
      <ul>
        <li>
          <Link href="/onboarding">OnBoarding Sample</Link>
        </li>
        <li>
          <Link href="/chat">Chat Message Sample</Link>
        </li>
      </ul>
    </main>
  );
}
