import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';

const customFont = JetBrains_Mono({
    subsets: ['latin'],
    weight: 'variable',
});

export default function GalleryHome() {
  return (
    <>

    <Head>
      <title>gallery | rywd.ca</title>
      <meta name="description" content="Cool pics" />
    </Head>

    <main className={`${customFont.className} cursor-default relative min-h-screen bg-yellow-50 font-medium text-[14px] leading-tight text-zinc-800 select-text flex flex-col items-center`}>
      {/* ===================== Header ===================== */}
      <header className="sticky w-full max-w-xl py-12 font-medium">
        <div className="w-full max-w-xl px-4 py-12 font-medium">
          <Link
            href="/"
            className="group text-lg md:text-xl font-medium underline decoration-2 underline-offset-3 hover:text-stone-500"
          >
            rywd.ca
          <span className="inline-block opacity-0 group-hover:opacity-25 ml-2">&#40;</span>
          <span className="inline-block opacity-0 group-hover:opacity-50">
          cd
          </span>
          <span className="inline-block opacity-0 group-hover:opacity-15">&#41;</span>

          </Link>
        </div>
      </header>
      <article className="w-full max-w-xl px-4 py-12 md:py-24 font-medium">
        <Prompt command=' ls'/>
        <GalleryImage src='/images/elgin.jpg' alt='Elgin Street' caption="Elgin Street, Ottawa (June)" date="2025-06-02"/>
        <GalleryImage src='/images/baloons.jpg' alt='Balloons' caption="hot air balloons (September)" date="2024-09-20"/>
        <GalleryImage src='/images/bismarck.jpg' alt='Bismarck' caption="my Bismarck model ship" date="2025-06-24"/>
        <GalleryImage src='/images/animalscover.png' alt='Animals Full' caption="Pink Floyd's Animals (1977) extended album art" date="2025-06-24"/>
        <GalleryImage src='/images/lakesunset.jpg' alt='Lake Sunset' caption="sunset at cottage (June)" date="2024-06-05"/>
      </article>
      </main>
    </>
  );
}

function Prompt({ command }: { command: string }) {
   return (
     <p>
       <strong className="text-green-800">ryan</strong>
       @
       <strong className="text-green-800">rywd.ca</strong>
       :~/gallery
       <span className="text-yellow-600">$</span> 
       <strong className="inline font-normal">{command}</strong>
     </p>
   );
}

function GalleryImage({ src, alt, caption, date }: { src: string; alt: string; caption: string; date: string; }) {
  return (
    <figure className="w-full">
      <div className="relative w-full mt-4 h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
      <figcaption className="mt-0.5 text-right text-zinc-900">
        {caption}
      </figcaption>
      <figcaption className="text-right font-light text-stone-500">
        {date}
      </figcaption>
    </figure>
  );
}