
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';

export default function Projects() {
  return (
    <>

    <Head>
      <title>school</title>
    </Head>
    <main className="relative min-h-screen bg-yellow-50 font-medium text-[18px] leading-tight text-zinc-900 select-text flex flex-col items-center pt-8">
      {/* ===================== Header ===================== */}
      <header className="sticky top-0 bg-yellow-50 w-full z-10 py-4">
        <div className="max-w-3xl mx-auto px-4 flex justify-center">
          <Link
            href="/projects"
            className="text-lg md:text-xl font-medium underline decoration-2 underline-offset-4 hover:text-zinc-900"
          >
            rywd.ca {/* Site title linking back to home */}
          </Link>
        </div>
      </header>
    </main>
    </>
  )
}