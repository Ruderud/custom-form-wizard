import Link from "next/link";

export const runtime = "edge";

export default function Home() {
  return (
    <main>
      <div className="p-10 flex justify-center text-4xl">Form Wizard Samples</div>
      <Link href="/onboarding">OnBoarding Sample</Link>
    </main>
  );
}
