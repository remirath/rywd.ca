// pages/index.tsx (Pages Router)  
// Cleaned‑up replica of zoch.dev front page – no debug colours, simple centering.  
// TailwindCSS utilities only.  

import React from "react";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#feffe4] font-medium text-[15px] leading-tight text-zinc-900 select-none flex flex-col items-center">
      {/* decorative star in the corner */}

      {/* ===================== Top link ===================== */}
      <header className="pt-6 md:pt-12">
        <Link
          href="/"
          className="text-lg md:text-xl font-medium underline decoration-2 underline-offset-4 hover:text-zinc-900"
        >
          rywd.ca
        </Link>
      </header>

      {/* ===================== Terminal body ================= */}
      <article className="w-full max-w-xl px-4 py-12 md:py-24">
        {/* whoami */}
        <Prompt command=" whoami" />
        <Line label="User" value="Ryan" icon="👤" />
        <Line
          label="About"
          value={
            <>
              An undergrad electrical engineering student from Newmarket, Ontario
            </>
          }
          icon="📰"
        />
        <Line
          label="Stack(s)"
          value="JavaScript | TypeScript | Next.js | React | TailwindCSS | CSS | Python | Django "
          icon="📚"
        />

        {/* links */}
        <Gap />
        <Prompt command=" ls links/" />
        <div className="grid grid-cols-3 gap-2 mt-0.5">
          <DirLink href="/gallery" label="gallery/" />
          <DirLink href="/projects" label="projects/" />
          <DirLink href="/writings" label="writings/" />
        </div>

        {/* recent-writes */}
        <Gap />
        <Prompt command=" ls -a writings/" />
        <ListItem label="" sub="sub" />
        <ListItem label="" sub="sub" />

        {/* socials */}
        <Gap />
        <Prompt command=" cat socials.md" />
        <ul className="pl-4 list-disc text-sky-700">
          <Social href="https://github.com/remirath" label="GitHub" />
          <Social href="https://twitter.com/USERNAME" label="Twitter" />
          <Social href="https://discord.gg/INVITE" label="Discord" />
        </ul>
      </article>
    </main>
  );
}

/* ------------------------------------------------------- */
function Prompt({ command }: { command: string }) {
  return (
    <p>
      <strong className="text-green-800">&lt;ryan</strong>
      @
      <strong className="text-green-800">rywd.ca&gt;</strong>
      :~
      <span className="text-yellow-600">$</span> 
      <strong className="inline font-normal">{command}</strong>
    </p>
  );
}

function Line({ label, value, icon }: { label: string; value: React.ReactNode; icon?: string }) {
  // Assign a different colour per specific label
  const colour =
    label === "User"
      ? "text-red-500"
      : label === "About"
      ? "text-green-600"
      : label.toLowerCase().includes("stack")
      ? "text-blue-600"
      : "text-purple-600";

  return (
    <p>
      <span className={`${colour} font-semibold`}>{icon && `${icon} `}{label}:</span> {value}
    </p>
  );
}

function DirLink({ href, label }: { href: string; label: string }) {
  return (
    <p>
      <a href={href} className="underline font-medium text-sky-800 hover:text-sky-800">
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

function Social({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
        <span className="text-zinc-900">[</span> {label} <span className="text-zinc-900">]</span>
      </a>
    </li>
  );
}

function Gap() {
  return <div className="h-18" />;
}

/* Utility class – slow spin */
// Add in globals.css:
// @keyframes spin-slow { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
// .animate-spin-slow { animation: spin-slow 12s linear infinite }