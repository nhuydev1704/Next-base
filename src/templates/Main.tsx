import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="text-gray-700 w-full px-1 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <header className="border-gray-300 border-b">
        <div className="pb-8 pt-16">
          <h1 className="text-gray-900 text-3xl font-bold">
            {AppConfig.title}
          </h1>
          <h2 className="text-xl">{AppConfig.description}</h2>
        </div>
        <nav>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 border-none"
              >
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link
                href="/about/"
                className="text-gray-700 hover:text-gray-900 border-none"
              >
                About
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="text-gray-700 hover:text-gray-900 border-none"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
            <li className="mr-6">
              <Link
                href="/blog/"
                className="text-gray-700 hover:text-gray-900 border-none"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-gray-300 border-t py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </div>
  </div>
);

export { Main };
