import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="p-10 flex justify-center text-4xl">Onboarding Form</div>
      <Link href="/step">Start</Link>
    </main>
  );
}
