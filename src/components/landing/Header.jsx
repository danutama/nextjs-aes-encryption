'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="container-fluid bg-primary-2 py-3">
      <div className="container bg-primary-2 px-0 d-flex justify-content-between align-items-center">
        <Image src="/vercel.svg" alt="Next.js logo" width={30} height={30} priority />
        <Link href="/start" className="btn btn-white px-3 fw-bold rounded-pill">
          Get Started
        </Link>
      </div>
    </header>
  );
}
