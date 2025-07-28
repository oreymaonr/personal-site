'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="./images/me.jpg" alt="Ryan Romeo" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Ryan Romeo</h2>
          <p>
            <a href="mailto:ryanromeo10@gmail.com">ryanromeo@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Ryan. I am a student of {''}
          <a href="https://www.hs-bremen.de/">Hochschule Bremen</a>, having work experience in IT
          from {''}
          <a href="https://www.tcs.com/">Tata Consultancy Services Ltd.</a>
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; <Link href="/">Ryan Romeo.</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
