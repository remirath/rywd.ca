// pages/projects.tsx (Pages Router)
// Cleaned‑up list of projects – TailwindCSS utilities only, responsive layout with image previews.

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
import { JetBrains_Mono } from 'next/font/google';

const customFont = JetBrains_Mono({
    subsets: ['latin'],
    weight: 'variable',
});

export default function ProjectsHome() {
  return (
    <>

    <Head>
      <title>projects | rywd.ca</title>
      <meta name="description" content="All my personal work that's worth noting" />
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

      {/* ===================== Projects List ===================== */}
      <article className="w-full max-w-xl px-4 py-12 md:py-24 font-medium">
        <Prompt command=' ls'/>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </article>
    </main>
    </>
  );
}

/* ------------------------------------------------------- */
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
}

const projects: Project[] = [
  {
    title: 'DBR Laser Model',
    description:
      'MATLAB simulation software which models a 1D optical waveguide and DBR laser using grating patterns.',
    tags: ['Modelling', 'Simulation', 'Electromagnetics'],
    image: '/images/matlab.png',
    href: 'https://github.com/remirath/4700PAS',
  },
  {
    title: 'Undergrad Resources',
    description:
      'A comprehensive portfolio of relevant work done during my undergraduate degree.',
    tags: ['Hardware', 'Software', 'Lab', 'Research'],
    image: '/images/carleton.png',
    href: '/projects/school',
  },
  {
    title: 'rywd.ca',
    description:
      'The project timeline for this websites source code.',
    tags: ['Full Stack', 'Portfolio', 'Self-Hosting'],
    image: '/images/web-logo.png',
    href: '/projects/website',
  },
  {
    title: 'Hockeytree',
    description:
      'An app to rank NHL teams based off performance using statistical techniques and machine learning.',
    tags: ['Machine Learning', 'Analytics', 'NHL'],
    image: '/images/hockeytree.png',
    href: '/projects/hockeytree',
  },
];

/* ------------------------------------------------------- */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex bg-yellow-50 rounded-lg">
      {/* Text area */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <h2 className="text-xl font-semibold mb-1 text-zinc-900 hover:opacity-60">
            <Link
          href={project.href || '#'}>
          
          {project.title}
        </Link>
            </h2>
          <p className="font-normal text-zinc-700 mb-3">{project.description}</p>
          <Tags tags={project.tags} />
        </div>
      
      </div>

      {/* Image preview */}
      <div className="relative h-32 w-32 flex-shrink-0 mb-5">
        <Link href={project.href || '#'}>
          <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"/>
        </Link>
      </div>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function Prompt({ command }: { command: string }) {
  return (
    <p>
      <strong className="text-green-800">ryan</strong>
      @
      <strong className="text-green-800">rywd.ca</strong>
      :~/projects
      <span className="text-yellow-600">$</span> 
      <strong className="inline font-normal">{command}</strong>
    </p>
  );
}