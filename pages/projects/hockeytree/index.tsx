import React from "react";
import Link from 'next/link';
import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';

const customFont = JetBrains_Mono({
    subsets: ['latin'],
    weight: 'variable',
});

export default function Home() {
  return (
    <>

    <Head>
      <title>hockeytree</title>
    </Head>

    <main className={`${customFont.className} relative min-h-screen bg-yellow-50 font-medium text-[14px] leading-tight text-zinc-800 select-text flex flex-col items-center`}>
      {/* ===================== Header ===================== */}
      <header className="sticky w-full max-w-xl py-12 font-medium">
        <div className="w-full max-w-xl px-4 py-12 font-medium">
          <Link
            href="/projects"
            className="group text-lg md:text-xl font-medium underline decoration-2 underline-offset-3 hover:text-stone-500"
          >
            rywd.ca
          <span className="inline-block opacity-0 group-hover:opacity-25 ml-2">&#40;</span>
          <span className="inline-block opacity-0 group-hover:opacity-50">
          cd ..
          </span>
          <span className="inline-block opacity-0 group-hover:opacity-15">&#41;</span>

          </Link>
        </div>
      </header>
      </main>
    </>
  );
}