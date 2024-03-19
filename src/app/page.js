import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Testing API Routes in Next.js</h1>
      <Link href="/unsplash-images">Unsplash images</Link>
    </div>
  );
}
