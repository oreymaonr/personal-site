import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import Cell from '@/components/Projects/Cell';
import data from '@/data/projects';

import PageWrapper from '../components/PageWrapper';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Learn about Ryan Romeo's projects.",
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2>
              <Link href="/projects">Projects</Link>
            </h2>
            <p>A selection of my best projects</p>
          </div>
        </header>
        {data.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </article>
    </PageWrapper>
  );
}
