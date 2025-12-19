
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Thoughts } from './pages/Thoughts';
import { Insights } from './pages/Insights';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'thoughts': return <Thoughts />;
      case 'insights': return <Insights />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      {/* Sidebar Navigation */}
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {/* Main Content Area */}
      <main className="flex-1 transition-all duration-500 ease-in-out">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
          {renderPage()}
        </div>
      </main>

      {/* Subtle background decoration */}
      <div className="fixed top-0 right-0 p-12 opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[12rem] font-bold leading-none serif">空</h1>
      </div>
    </div>
  );
};

export default App;
