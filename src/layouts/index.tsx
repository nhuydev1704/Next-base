import React from 'react';

import Footer from './Footer';
import Header from './Header';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="h-full flex-1 bg-red-500">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
