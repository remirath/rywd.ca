// pages/index.tsx (Pages Router)  
// Cleaned‑up replica of zoch.dev front page – no debug colours, simple centering.  
// TailwindCSS utilities only.  

import React from "react";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-yellow-50 font-medium text-[18px] leading-tight text-zinc-900 select-text flex flex-col items-center">
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
      <article className="w-full max-w-xl px-4 py-12 md:py-24 font-medium">
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
        <div className="font-semibold grid grid-cols-3 gap-20 mt-1">
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
        <ul className="pl-4 list-disc">
          <Social href="https://github.com/remirath" label="GitHub" colour="text-zinc-800"/>
          <Social href="https://discord.gg/htjwwnq" label="Discord" colour="text-blue-600"/>
          <Social href="https://www.linkedin.com/in/ryan-wood-59410a332/" label="LinkedIn" colour="text-sky-600"/>
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
  colour,   // e.g. "text-zinc-800"
}: {
  href: string
  label: string
  colour: string
}) {
  return (
    <li
      // make the bullet a bit larger & translucent, and inherit the text colour
      className={`marker:text-xl marker:opacity-50 ${colour}`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        // turn this <a> into a "group" so its children can react to hover
        className={`group underline font-bold ${colour} hover:${colour}`}
      >
        {/* your normal brackets */}
        <span className="opacity-50">[</span>
          {label}
        <span className="opacity-50">]</span>

        {/* the URL, hidden by default (opacity-0), shown on hover (opacity-50) */}
        <span className="opacity-0 group-hover:opacity-25 ml-2">&#40;</span>
        <span className="opacity-0 group-hover:opacity-50">
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

/* Utility class – slow spin */
// Add in globals.css:
// @keyframes spin-slow { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
// .animate-spin-slow { animation: spin-slow 12s linear infinite }