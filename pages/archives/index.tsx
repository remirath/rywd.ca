import React from "react";
import Link from 'next/link';
import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';

const customFont = JetBrains_Mono({
    subsets: ['latin'],
    weight: 'variable',
});

export default function ArchivesHome() {


  return (
    <>

    <Head>
      <title>the archives | rywd.ca</title>
    </Head>

    <main className={`${customFont.className} relative min-h-screen bg-yellow-50 font-medium text-[14px] leading-tight text-zinc-800 select-text flex flex-col items-center cursor-default`}>
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

        {/* list element */}
        <article className="w-full max-w-xl px-4 py-12 md:py-24 font-normal">
          <Prompt command=' ls -a'/>
          <ul className="w-full max-w-xl mx-auto pt-3">
            {items.map((item, index) => renderListItem(item.info, item.date, item.href, item.pin, index))}
          </ul>
        </article>
      </main>
    </>
  );
}


  const items = [
    { info: "Resume.pdf", date: "2025-06-21", href: "/docs/resume.pdf", pin: true },
    { info: "Home Lab", date: "2025-06-24", href: "/archives/homelab", pin: true },
    { info: "Fixed SSL config", date: "2025-06-20", href: '', pin:false },
    { info: "Launched rywd.ca", date: "2025-06-15", href: '', pin:false },
    { info: "", date: "yr-mm-dd", href: '', pin:false },
  ];

  // Reusable element renderer
const renderListItem = (info: string, date: string, href: string, pin: boolean, index: number) => (
  <li
    key={index}
      className={`flex justify-between px-1.5 py-1.5 ${
        index % 2 === 0 ? "bg-stone-300" : "bg-yellow-50"
      }`}
  >
    <span className="flex items-start">
      {pin && <span className="pr-1.5">📌</span>}
      {
      href ? (<Link href={`${href}`} className='font-medium underline decoration-2 underline-offset-3 hover:text-stone-500'>
        {info}
      </Link>) : (<span className='font-medium cursor-default'>{info}</span>)
      }
    </span>
    <span className="text-right text-zinc-500 cursor-default">{date}</span>
  </li>
 );

function Prompt({ command }: { command: string }) {
  return (
    <p>
      <strong className="text-green-800">ryan</strong>
      @
      <strong className="text-green-800">rywd.ca</strong>
      :~/archives
      <span className="text-yellow-600">$</span> 
      <strong className="inline font-normal">{command}</strong>
    </p>
  );
}