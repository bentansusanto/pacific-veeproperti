import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface MockLayoutProps {
  children: React.ReactNode;
}

const MockLayout = ({ children }: MockLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MockLayout;
