import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container py-5">
      <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority className="mb-4" />
      <h1 className="text-center">Selamat Datang di Next AES</h1>
      <Link href="/start">Get Started</Link>
    </div>
  );
}
