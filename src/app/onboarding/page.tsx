import Link from 'next/link';

export const runtime = 'edge';

export default function IndexPage() {
  return (
    <main className="p-10 flex flex-col ">
      <div className="p-10 text-center text-2xl">{"Let's Start"}</div>
      <Link className="rounded-lg px-5 py-2 bg-slate-400" href={'/onboarding/user-info'}>
        Start
      </Link>
    </main>
  );
}
