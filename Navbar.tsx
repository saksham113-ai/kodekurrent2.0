import React, { useState } from 'react';
import { 
  FileCode, 
  Search, 
  GitBranch, 
  Play, 
  Settings, 
  User, 
  HelpCircle,
  Menu,
  ChevronDown,
  Terminal,
  Mail,
  Users,
  Image,
  X,
  Trophy,
  Home
} from 'lucide-react';

interface NavbarProps {
  onRegister: () => void;
  onHome: () => void;
  hideLinks?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegister, onHome, hideLinks = false }) => {
  const [activeTab, setActiveTab] = useState('home');

  const sections = [
    { name: 'README.md', id: 'home', icon: <FileCode size={14} className="text-blue-400" /> },
    { name: 'tracks.ts', id: 'tracks', icon: <FileCode size={14} className="text-yellow-400" /> },
    { name: 'prizes.yaml', id: 'prizes', icon: <Trophy size={14} className="text-amber-400" /> },
    { name: 'schedule.json', id: 'schedule', icon: <FileCode size={14} className="text-purple-400" /> },
    { name: 'architects.ts', id: 'team', icon: <Users size={14} className="text-cyan-400" /> },
    { name: 'snapshots.img', id: 'gallery', icon: <Image size={14} className="text-pink-400" /> },
    { name: 'contact.api', id: 'contact', icon: <Mail size={14} className="text-orange-400" /> },
    { name: 'partners.env', id: 'sponsors', icon: <FileCode size={14} className="text-green-400" /> },
    { name: 'faq.txt', id: 'faq', icon: <HelpCircle size={14} className="text-gray-400" /> }
  ];

  const scrollToSection = (id: string) => {
    if (hideLinks) {
      onHome();
      return;
    }
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Activity Bar (Leftmost) */}
      <div className="fixed top-0 left-0 bottom-0 w-12 bg-ide-header border-r border-ide-border flex flex-col items-center py-4 gap-6 z-[1001] hidden md:flex">
        <div className="text-ide-text opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <Menu size={24} />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div onClick={onHome} className="text-ide-text p-2 border-l-2 border-white cursor-pointer hover:bg-ide-active transition-all"><FileCode size={24} /></div>
          <div className="text-ide-muted p-2 hover:text-ide-text transition-colors cursor-pointer"><Search size={24} /></div>
          <div className="text-ide-muted p-2 hover:text-ide-text transition-colors cursor-pointer"><GitBranch size={24} /></div>
          <div className="text-ide-muted p-2 hover:text-ide-text transition-colors cursor-pointer"><Play size={24} /></div>
        </div>
        <div className="flex flex-col gap-6 mb-4">
          <div className="text-ide-muted hover:text-ide-text transition-colors cursor-pointer"><User size={24} /></div>
          <div className="text-ide-muted hover:text-ide-text transition-colors cursor-pointer"><Settings size={24} /></div>
        </div>
      </div>

      {/* Sidebar (Folder Structure) */}
      <div className="fixed top-0 left-12 bottom-0 w-64 bg-ide-sidebar border-r border-ide-border z-[1000] hidden lg:block overflow-y-auto">
        <div className="p-3 text-[11px] uppercase tracking-wider font-bold text-ide-muted flex justify-between items-center">
          <span>Explorer: Kode_Kurrent</span>
        </div>
        
        <div className="mt-2">
          <div className="flex items-center gap-1 px-4 py-1 text-ide-text hover:bg-ide-active cursor-pointer font-bold text-sm">
            <ChevronDown size={14} />
            <span>PROJECT_K_2025</span>
          </div>
          
          <div className="ml-4 mt-1">
            {hideLinks ? (
              <button 
                onClick={onHome}
                className="flex w-full items-center gap-2 px-4 py-1.5 transition-colors text-sm text-left text-ide-muted hover:text-ide-text hover:bg-ide-active"
              >
                <Home size={14} className="text-blue-400" />
                <span>Return to Home</span>
              </button>
            ) : (
              sections.map(file => (
                <button 
                  key={file.id} 
                  onClick={() => scrollToSection(file.id)}
                  className={`flex w-full items-center gap-2 px-4 py-1.5 transition-colors text-sm text-left ${activeTab === file.id ? 'bg-ide-active text-ide-text' : 'text-ide-muted hover:text-ide-text hover:bg-ide-active'}`}
                >
                  {file.icon}
                  <span>{file.name}</span>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-1 px-4 py-1 text-ide-text hover:bg-ide-active cursor-pointer font-bold text-sm">
            <ChevronDown size={14} />
            <span>DEPENDENCIES</span>
          </div>
          <div className="ml-8 mt-1 space-y-1 text-xs text-ide-muted font-mono">
            <div>@rgipt/core</div>
            <div>@ieee/standard</div>
            <div>react@19.0.0</div>
          </div>
        </div>
      </div>

      {/* Top Tab Bar (Content Header) */}
      <div className="fixed top-0 left-0 lg:left-76 md:left-12 right-0 h-10 bg-ide-header border-b border-ide-border flex items-center z-[999] overflow-x-auto no-scrollbar">
        <div className="flex h-full">
          {hideLinks ? (
            <div className="flex h-full items-center gap-2 px-4 border-r border-ide-border bg-ide-bg text-ide-text border-t-2 border-t-ide-keyword">
              <FileCode size={14} className="text-orange-400" />
              <span className="text-xs font-mono">registration_flow.tsx</span>
            </div>
          ) : (
            sections.map(file => (
              <button
                key={file.id}
                onClick={() => scrollToSection(file.id)}
                className={`flex h-full items-center gap-2 px-4 border-r border-ide-border transition-all min-w-fit relative group ${
                  activeTab === file.id 
                    ? 'bg-ide-bg text-ide-text border-t-2 border-t-ide-function' 
                    : 'bg-ide-sidebar text-ide-muted hover:text-ide-text hover:bg-ide-active'
                }`}
              >
                {file.icon}
                <span className="text-xs font-mono">{file.name}</span>
                <X 
                  size={10} 
                  className={`ml-2 transition-opacity ${activeTab === file.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} 
                />
              </button>
            ))
          )}
        </div>
        
        <div className="ml-auto px-4 flex items-center gap-4 text-ide-muted sticky right-0 bg-ide-header">
           <div 
             onClick={onRegister}
             className="flex items-center gap-2 bg-ide-accent/10 border border-ide-accent text-ide-accent px-3 py-0.5 rounded text-xs font-bold hover:bg-ide-accent hover:text-white transition-colors cursor-pointer whitespace-nowrap"
           >
             <Play size={12} fill="currentColor" />
             <span>Run Hackathon</span>
           </div>
        </div>
      </div>
    </>
  );
};