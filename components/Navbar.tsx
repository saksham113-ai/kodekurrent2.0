import React from 'react';
import { 
  FileCode, 
  Search, 
  GitBranch, 
  Play, 
  Settings, 
  User, 
  Menu,
  ChevronDown,
  Terminal,
  Mail,
  Users,
  Image,
  HelpCircle,
  Home
} from 'lucide-react';

interface NavbarProps {
  onRegister: () => void;
  onHome: () => void;
  hideLinks?: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onRegister, 
  onHome, 
  hideLinks = false, 
  isExpanded, 
  onToggle 
}) => {
  const sections = [
    { name: 'README.md', id: 'home', icon: <FileCode size={14} className="text-blue-400" /> },
    { name: 'tracks.ts', id: 'tracks', icon: <FileCode size={14} className="text-yellow-400" /> },
    { name: 'prizes.yaml', id: 'prizes', icon: <FileCode size={14} className="text-amber-400" /> },
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
      <div className="fixed top-0 left-0 bottom-0 w-12 bg-ide-header border-r border-ide-border flex flex-col items-center py-4 gap-6 z-[1001]">
        <div 
          onClick={onToggle}
          className={`p-2 transition-all cursor-pointer rounded-lg hover:bg-ide-active ${isExpanded ? 'text-white' : 'text-ide-muted'}`}
        >
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

      {/* Sidebar (Folder Structure) - Collapsible */}
      <div className={`fixed top-0 left-12 bottom-0 w-64 bg-ide-sidebar border-r border-ide-border z-[1000] overflow-y-auto transition-transform duration-300 ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
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
                  className="flex w-full items-center gap-2 px-4 py-1.5 transition-colors text-sm text-left text-ide-muted hover:text-ide-text hover:bg-ide-active"
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
    </>
  );
};