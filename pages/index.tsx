// pages/index.tsx (Pages Router)  
// Cleaned‑up replica of zoch.dev front page – no debug colours, simple centering.  
// TailwindCSS utilities only.  

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
      <title>rywd.ca</title>
      <meta name="description" content="Personal homepage of Ryan Wood – Electrical Engineering student." />
    </Head> 

    <main className={`${customFont.className} relative min-h-screen bg-yellow-50 font-medium text-[14px] leading-tight text-zinc-900 select-text flex flex-col items-center`}>
      {/* decorative star in the corner */}

      {/* ===================== Top link ===================== */}
      <header className="w-full max-w-xl px-4 py-12 md:py-24 font-medium">
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
      </header>

      {/* ===================== Terminal body ================= */}
      <article className="w-full max-w-xl px-4 py-12 md:py-24 font-normal">
        {/* whoami */}
        <Prompt command=" whoami" />
        <p>
          <span className='font-semibold text-red-500'>👤 User:</span> Ryan
        </p>
        <p>
          <span className='font-semibold text-green-600'>📰 About:</span> An undergrad electrical engineering student from Newmarket, Ontario
        </p>
        <p>
          <span className='font-semibold text-blue-600'>📚 Stacks:</span> JavaScript | TypeScript | Next.js | React | TailwindCSS | CSS | Python
        </p>

        {/* links */}
        <Gap />
        <Prompt command=" ls links/" />
        <div className="font-semibold grid grid-cols-3 gap-20 mt-1">
          <DirLink href="/gallery" label="gallery/" />
          <DirLink href="/projects" label="projects/" />
          <DirLink href="/archives" label="archives/" />
        </div>

        {/* recent-writes */}
        <Gap />
        <Prompt command=" ls -a archives/" />
        <ListItem label="" sub="sub" />
        <ListItem label="" sub="sub" />

        {/* socials */}
        <Gap />
        <Prompt command=" cat socials.md" />
        <ul className="pl-4 list-disc">
          <Social href="https://github.com/remirath" label="GitHub" colour="text-zinc-800" icon="/images/github.svg"/>
          <Social href="https://discord.gg/htjwwnq" label="Discord" colour="text-blue-600" icon="/images/discord.svg"/>
          <Social href="https://www.linkedin.com/in/ryan-wood-59410a332/" label="LinkedIn" colour="text-sky-600" icon="/images/linkedin.svg"/>
        </ul>
      </article>
    </main>
    </>
  );
}

/* ------------------------------------------------------- */
function Prompt({ command }: { command: string }) {
  return (
    <p>
      <strong className="text-green-800">ryan</strong>
      @
      <strong className="text-green-800">rywd.ca</strong>
      :~
      <span className="text-yellow-600">$</span> 
      <strong className="inline font-normal">{command}</strong>
    </p>
  );
}

function DirLink({ href, label }: { href: string; label: string }) {
  return (
    <p>
      <a href={href} className="underline font-semibold text-sky-600 hover:text-sky-600">
        {label}
      </a>
    </p>
  );
}

function ListItem({ label, sub }: { label: string; sub?: string }) {
  return (
    <p>
      {label} {sub && <span className="text-slate-500">({sub})</span>}
    </p>
  );
}

function Social({
  href,
  label,
  colour,
  icon
}: {
  href: string
  label: string
  colour: string
  icon: string
}) {
  return (
    <li
      className={`marker:text-m marker:opacity-50 hover:list-['-'] ${colour}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group font-medium ${colour} hover:${colour}`}
      >
        <span className="opacity-50 pr-1">[</span>
        <span className="inline-flex items-center align-middle">
          <img src={`${icon}`} alt='icon' className='w-5 h-5'/>
          <p className="pl-2 hover:underline">{label}</p>
        </span>
        <span className="opacity-50">]</span>
        <span className="opacity-0 group-hover:opacity-25 ml-3">&#40;</span>
        <span className="wavy-underline underline-offset-3 opacity-0 group-hover:opacity-50">
        {href}
        </span>
        <span className="opacity-0 group-hover:opacity-15">&#41;</span>
      </a>
    </li>
  )
}
function Gap() {
  return <div className="h-18" />;
}
