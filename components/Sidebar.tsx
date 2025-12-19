
import React from 'react';
import { PageType } from '../types';

interface SidebarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: '我是谁', description: '精神肖像' },
    { id: 'thoughts', label: '我想什么', description: '思想流' },
    { id: 'insights', label: '我见何物', description: '瞬时感悟' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full md:relative md:w-64 md:h-screen bg-white md:bg-transparent border-t md:border-t-0 md:border-r border-neutral-100 z-50">
      <div className="flex md:flex-col items-center md:items-start justify-around md:justify-center h-16 md:h-full md:px-8">
        <div className="hidden md:block mb-12">
          <div className="w-10 h-10 bg-black rounded-full mb-4"></div>
          <p className="text-xs uppercase tracking-[0.2em] font-light text-neutral-400">Personal Space</p>
        </div>
        
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as PageType)}
            className={`group flex flex-col items-center md:items-start transition-all duration-300 mb-0 md:mb-8 ${
              currentPage === item.id ? 'text-black' : 'text-neutral-400 hover:text-neutral-600'
            }`}
          >
            <span className={`text-sm md:text-lg font-medium serif ${currentPage === item.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
              {item.label}
            </span>
            <span className="hidden md:block text-[10px] uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {item.description}
            </span>
            {currentPage === item.id && (
              <div className="h-1 w-1 bg-black rounded-full mt-1 md:mt-2"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};
