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
    </main>
  );
}

// function Prompt({ command }: { command: string }) {
//   return (
//     <p>
//       <strong className="text-green-800">&lt;ryan</strong>
//       @
//       <strong className="text-green-800">rywd.ca&gt;</strong>
//       :~
//       <span className="text-yellow-600">$</span> 
//       <strong className="inline font-normal">{command}</strong>
//     </p>
//   );
// }

// function Line({ label, value, icon }: { label: string; value: React.ReactNode; icon?: string }) {
//   // Assign a different colour per specific label
//   const colour =
//     label === "User"
//       ? "text-red-500"
//       : label === "About"
//       ? "text-green-600"
//       : label.toLowerCase().includes("stack")
//       ? "text-blue-600"
//       : "text-purple-600";

//   return (
//     <p>
//       <span className={`${colour} font-semibold`}>{icon && `${icon} `}{label}:</span> {value}
//     </p>
//   );
// }

// function DirLink({ href, label }: { href: string; label: string }) {
//   return (
//     <p>
//       <Link href={href} className="underline font-semibold text-sky-600 hover:text-sky-600">
//         {label}
//       </Link>
//     </p>
//   );
// }

// function ListItem({ label, sub }: { label: string; sub?: string }) {
//   return (
//     <p>
//       {label} {sub && <span className="text-slate-500">({sub})</span>}
//     </p>
//   );
// }

// function Social({
//   href,
//   label,
//   colour,   // e.g. "text-zinc-800"
// }: {
//   href: string
//   label: string
//   colour: string
// }) {
//   return (
//     <li
//       // make the bullet a bit larger & translucent, and inherit the text colour
//       className={`marker:text-xl marker:opacity-50 ${colour}`}
//     >
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         // turn this <a> into a "group" so its children can react to hover
//         className={`group underline font-bold ${colour} hover:${colour}`}
//       >
//         {/* your normal brackets */}
//         <span className="opacity-50">[</span>
//           {label}
//         <span className="opacity-50">]</span>

//         {/* the URL, hidden by default (opacity-0), shown on hover (opacity-50) */}
//         <span className="opacity-0 group-hover:opacity-25 ml-2">&#40;</span>
//         <span className="opacity-0 group-hover:opacity-50">
//         {href}
//         </span>
//         <span className="opacity-0 group-hover:opacity-15">&#41;</span>
//       </a>
//     </li>
//   )
// }
// function Gap() {
//   return <div className="h-18" />;
// }