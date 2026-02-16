
import React from 'react';
import { ShieldCheck, ArrowLeft, Terminal, CheckCircle2, Zap } from 'lucide-react';

interface ThankYouProps {
  onBackToHome: () => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ onBackToHome }) => {
  return (
    <div className="max-w-2xl mx-auto py-20 text-center animate-fade-in">
      <div className="mb-12 relative inline-block">
        <div className="absolute inset-0 bg-ide-accent/20 blur-3xl animate-pulse"></div>
        <div className="relative w-32 h-32 bg-ide-header border border-ide-accent rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(63,185,80,0.3)]">
          <CheckCircle2 size={64} className="text-ide-accent" />
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-ide-text mb-6 font-mono tracking-tighter">
        DEPLOYMENT_<span className="text-ide-accent">SUCCESS</span>
      </h1>
      
      <p className="text-ide-muted text-lg mb-12 font-mono leading-relaxed">
        Team authorized. Protocol established. <br />
        <span className="text-ide-variable">Transmission received at RGIPT Control.</span>
      </p>

      <div className="bg-ide-header/60 border border-ide-border rounded-xl p-8 mb-12 text-left font-mono text-sm space-y-2">
        <div className="flex items-center gap-2 text-ide-muted opacity-50">
          <Terminal size={14} />
          <span>Finalizing log output...</span>
        </div>
        <div className="text-ide-accent">{" >> Team registered for Kode Kurrent '26"}</div>
        <div className="text-ide-accent">{" >> Verification email queued for delivery"}</div>
        <div className="text-ide-accent">{" >> Dashboard access: GRANTED"}</div>
        <div className="text-ide-function mt-4">{" >> \"The code is mightier than the bug.\""}</div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button
          onClick={onBackToHome}
          className="bg-ide-accent hover:bg-green-600 text-white px-10 py-5 rounded-xl font-bold transition-all flex items-center justify-center gap-3 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Root
        </button>
        <button
          className="bg-ide-sidebar border border-ide-border text-ide-text px-10 py-5 rounded-xl font-bold hover:bg-ide-active transition-all flex items-center justify-center gap-3"
        >
          <Zap size={20} className="text-ide-variable" />
          Join Discord_Link
        </button>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-40">
        <div className="flex items-center gap-2 grayscale brightness-200">
          <ShieldCheck size={16} />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Verified Hackathon</span>
        </div>
      </div>
    </div>
  );
};
